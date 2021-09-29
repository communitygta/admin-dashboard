/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/core/services/app.service';
import { AuthService, UserRole } from 'src/app/core/services/auth.service';
import { DashboardService } from 'src/app/core/services/dashboard.service';
import { InAppMessageService } from 'src/app/core/services/in-app-message.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  userProfile: {
    username: string;
    email: string;
    firstname: string;
    lastname: string;
    role: string;
    managing: any;
  };
  form: FormGroup;

  constructor(
    private authService: AuthService,
    private appService: AppService,
    private inAppMessageService: InAppMessageService,
    private fb: FormBuilder,
    private dashboardService: DashboardService
  ) {}

  ngOnInit() {
    this.formatProfile();
    this.initForm();
  }

  get old_password() {
    return this.form.controls.old_password;
  }

  get new_password() {
    return this.form.controls.new_password;
  }

  initForm() {
    this.form = this.fb.group({
      old_password: [
        null,
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(16),
          Validators.pattern(/^(?=.*[\d])(?=.*[a-zA-Z])[\w]{8,16}$/),
        ],
      ],
      new_password: [
        null,
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(16),
          Validators.pattern(/^(?=.*[\d])(?=.*[a-zA-Z])[\w]{8,16}$/),
        ],
      ],
    });
  }

  formatProfile() {
    const userProfile = this.authService.userProfile$.getValue();

    this.userProfile = {
      username: userProfile.user.username,
      email: userProfile.user.email,
      firstname: userProfile.user.first_name,
      lastname: userProfile.user.last_name,
      role: null,
      managing: null,
    };

    if (this.authService.userRole === UserRole.superAdmin) {
      this.userProfile.role = 'Super User';
    }
    if (this.authService.userRole === UserRole.neighbourhoodAdmin) {
      this.userProfile.role = 'Neighbourhood Administrator';
      this.userProfile.managing = userProfile.profile.neighbourhood;
    }
    if (this.authService.userRole === UserRole.organizationAdmin) {
      this.userProfile.role = 'Organization Administrator';
      this.userProfile.managing = userProfile.profile.organization;
    }
  }

  updatePassword() {
    if (this.form.invalid) {
      return;
    }

    this.authService.updatePassword(this.form.value).subscribe(() => {
      this.form.reset();
      this.inAppMessageService.simpleAlert(
        null,
        'Your password has been updated.'
      );
    });
  }
}
