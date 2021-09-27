import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AuthService, UserRole } from 'src/app/core/services/auth.service';
import { DashboardService } from 'src/app/core/services/dashboard.service';
import { InAppMessageService } from 'src/app/core/services/in-app-message.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.page.html',
  styleUrls: ['./user-edit.page.scss'],
})
export class UserEditPage implements OnInit {
  form: FormGroup;
  availableOrganizations: Array<any>;
  availableNeighbourhoods: Array<any>;
  showUserRoles = false;
  userProfile$ = this.getUserProfile();
  availableUserRoles = [
    { value: 1, name: 'Neighbourhood Admin' },
    { value: 2, name: 'Organization Admin' },
  ];

  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private dashboardService: DashboardService,
    private fb: FormBuilder,
    private inAppMessageService: InAppMessageService,
    private alertController: AlertController,
    private navController: NavController
  ) {
    this.initForm();
  }

  ngOnInit() {}

  public get userRole() {
    return this.form.controls.userRole;
  }

  public update(userProfile) {
    if (this.form.invalid) {
      return;
    }
    if (this.userRole.value === 1) {
      delete this.form.value.organization;
    } else {
      delete this.form.value.neighbourhood;
    }
    delete this.form.value.userRole;
    this.updateProfile(userProfile, this.form.value);
  }

  public async delete(userProfile) {
    const alert = await this.alertController.create({
      header: 'Warning',
      message: 'Are you sure to delete this user?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Yes, delete',
          cssClass: 'danger',
          handler: () => {
            this.authService
              .deleteUserProfileBySuperUser(userProfile.id)
              .subscribe(() => {
                this.inAppMessageService.simpleAlert(
                  null,
                  'This user has been deleted.',
                  'OK',
                  false,
                  () => this.navController.navigateBack('user-list')
                );
              });
          },
        },
      ],
    });

    alert.present();
  }

  private updateProfile(userProfile, payload) {
    let request;
    if (this.authService.userRole === UserRole.superAdmin) {
      request = this.authService.updateUserProfileBySuperUser(
        userProfile.id,
        payload
      );
    }

    if (this.authService.userRole === UserRole.neighbourhoodAdmin) {
      request = this.authService.updateUserProfileByNeighbourhoodAdmin(
        userProfile.id,
        payload
      );
    }
    request.subscribe(() => {
      this.inAppMessageService.simpleToast(
        'This user has been updated.',
        'bottom'
      );
      this.userProfile$ = this.getUserProfile();
    });
  }

  private initForm() {
    this.form = this.fb.group({
      userRole: [null],
      email: [null, [Validators.required]],
      organization: [null],
      neighbourhood: [null],
      isActive: [null],
    });
  }

  private updateForm(userProfile) {
    this.form.controls.email.patchValue(userProfile.user.email);
    this.form.controls.organization.patchValue(userProfile.organization?.id);
    this.form.controls.neighbourhood.patchValue(userProfile.neighbourhood?.id);
    this.form.controls.isActive.patchValue(userProfile.user.is_active);
    if (userProfile.neighbourhood) {
      this.form.controls.userRole.patchValue(this.availableUserRoles[0].value);
    }
    if (userProfile.organization) {
      this.form.controls.userRole.patchValue(this.availableUserRoles[1].value);
    }
    this.form.markAsPristine();
    return userProfile;
  }

  private getNeighbourhoodOptions(): Observable<any> {
    return this.dashboardService
      .getAllNeighbourhoods()
      .pipe(map((res) => (this.availableNeighbourhoods = res)));
  }

  private getOrganizationOptions(): Observable<any> {
    if (this.authService.userRole === UserRole.superAdmin) {
      return this.dashboardService
        .getAllOrganizations()
        .pipe(map((res) => (this.availableOrganizations = res)));
    }

    if (this.authService.userRole === UserRole.neighbourhoodAdmin) {
      return this.dashboardService
        .getOrganizationsByNeighbourhoodId(
          this.authService.userProfile$.getValue().profile.neighbourhood.id
        )
        .pipe(map((res) => (this.availableOrganizations = res)));
    }
  }

  private getUserProfile(): Observable<any> {
    if (this.authService.userRole === UserRole.superAdmin) {
      this.showUserRoles = true;
      return this.getNeighbourhoodOptions().pipe(
        switchMap(() => this.getOrganizationOptions()),
        switchMap(() =>
          this.authService
            .getUserBySuperUser(this.activatedRoute.snapshot.params.id)
            .pipe(map((userProfile) => this.updateForm(userProfile)))
        )
      );
    }

    if (this.authService.userRole === UserRole.neighbourhoodAdmin) {
      return this.getOrganizationOptions().pipe(
        switchMap(() =>
          this.authService
            .getUserByNeighbourhood(this.activatedRoute.snapshot.params.id)
            .pipe(map((userProfile) => this.updateForm(userProfile)))
        )
      );
    }
  }
}
