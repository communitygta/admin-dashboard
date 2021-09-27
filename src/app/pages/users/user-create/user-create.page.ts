import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AuthService, UserRole } from 'src/app/core/services/auth.service';
import { DashboardService } from 'src/app/core/services/dashboard.service';
import { InAppMessageService } from 'src/app/core/services/in-app-message.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.page.html',
  styleUrls: ['./user-create.page.scss'],
})
export class UserCreatePage implements OnInit {
  form: FormGroup;
  showOrganizations = false;
  showNeighbourhoods = false;
  showUserRoles = false;
  availableUserRoles = [
    { value: 1, name: 'Neighbourhood Admin' },
    { value: 2, name: 'Organization Admin' },
  ];
  availableOrganizations$: Observable<any>;
  availableNeighbourhoods$: Observable<any>;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private dashboardService: DashboardService,
    private inAppMessageService: InAppMessageService,
    private navController: NavController
  ) {
    this.initForm();
  }

  ngOnInit() {}

  public get username() {
    return this.form.controls.username;
  }

  public get email() {
    return this.form.controls.email;
  }

  public get password() {
    return this.form.controls.password;
  }

  public get userRole() {
    return this.form.controls.userRole;
  }

  public get neighbourhood() {
    return this.form.controls.neighbourhood;
  }

  public get organization() {
    return this.form.controls.organization;
  }

  public create() {
    if (this.form.invalid) {
      if (this.organization.invalid) {
        this.inAppMessageService.simpleToast(
          'Please select an organization',
          'bottom'
        );
      }
      if (this.neighbourhood.invalid) {
        this.inAppMessageService.simpleToast(
          'Please select a neighbourhood',
          'bottom'
        );
      }
      if (this.userRole.invalid) {
        this.inAppMessageService.simpleToast(
          'Please select a user role',
          'bottom'
        );
      }
      return;
    }
    if (this.userRole.value === 1) {
      delete this.form.value.organization;
    } else {
      delete this.form.value.neighbourhood;
    }
    delete this.form.value.userRole;
    this.authService.createUserByAdmin(this.form.value).subscribe((res) => {
      this.inAppMessageService.simpleAlert(
        null,
        'The new user has been created.',
        'OK',
        false,
        () => this.navController.navigateBack('user-list')
      );
    });
  }

  private initForm() {
    this.form = this.fb.group({
      username: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(16),
          Validators.pattern(/^(?=.*[\d])(?=.*[a-zA-Z])[\w]{8,16}$/),
        ],
      ],
      userRole: [null, [Validators.required]],
      organization: [null],
      neighbourhood: [null],
    });

    if (this.authService.userRole === UserRole.superAdmin) {
      this.showUserRoles = true;
      this.availableNeighbourhoods$ =
        this.dashboardService.getAllNeighbourhoods();
      this.availableOrganizations$ =
        this.dashboardService.getAllOrganizations();
    }

    if (this.authService.userRole === UserRole.neighbourhoodAdmin) {
      this.showOrganizations = true;
      this.form.controls.userRole.patchValue(this.availableUserRoles[0].value);
      this.form.controls.organization.setValidators([Validators.required]);
      this.availableOrganizations$ =
        this.dashboardService.getOrganizationsByNeighbourhoodId(
          this.authService.userProfile$.getValue().profile.neighbourhood.id
        );
    }

    this.userRole.valueChanges.subscribe((value) => {
      if (value === 1) {
        this.showNeighbourhoods = true;
        this.showOrganizations = false;
        this.neighbourhood.setValidators([Validators.required]);
        this.organization.clearValidators();
        this.organization.setValue(null);
      }
      if (value === 2) {
        this.showOrganizations = true;
        this.showNeighbourhoods = false;
        this.organization.setValidators([Validators.required]);
        this.neighbourhood.clearValidators();
        this.neighbourhood.setValue(null);
      }
    });
  }
}
