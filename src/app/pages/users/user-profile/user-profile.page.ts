/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { AppService } from 'src/app/core/services/app.service';
import { AuthService, UserRole } from 'src/app/core/services/auth.service';
import { InAppMessageService } from 'src/app/core/services/in-app-message.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  @ViewChild('oldPassword') oldPasswordInput: IonInput;
  @ViewChild('newPassword') newPasswordInput: IonInput;
  userProfile: {
    username: string;
    email: string;
    firstname: string;
    lastname: string;
    role: string;
    managing: any;
  };

  constructor(
    private authService: AuthService,
    private appService: AppService,
    private inAppMessageService: InAppMessageService,
  ) {}

  ngOnInit() {
    this.formatProfile();
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
      this.userProfile.managing = this.appService.appData.Neighbourhood.find(
        (item) => item.id === userProfile.profile.neighbourhood.id
      );
    }
    if (this.authService.userRole === UserRole.organizationAdmin) {
      this.userProfile.role = 'Organization Administrator';
      this.userProfile.managing = this.appService.appData.Organization.find(
        (item) => item.id === userProfile.profile.organization.id
      );
    }
  }

  updatePassword(oldPassword, newPassword) {
    const payload = {
      old_password: oldPassword,
      new_password: newPassword,
    };
    this.authService.updatePassword(payload).subscribe(() => {
      this.oldPasswordInput.value = null;
      this.newPasswordInput.value = null;
      this.inAppMessageService.simpleAlert(null, 'Your password has been updated.');
    });
  }
}
