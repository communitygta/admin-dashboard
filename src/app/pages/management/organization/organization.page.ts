import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { DashboardService } from 'src/app/core/services/dashboard.service';
import { InAppMessageService } from 'src/app/core/services/in-app-message.service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.page.html',
  styleUrls: ['./organization.page.scss'],
})
export class OrganizationPage implements OnInit {
  organization$: Observable<any>;

  constructor(
    private dashboardService: DashboardService,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService,
    private alertController: AlertController,
    private navController: NavController,
    private inAppMessageService: InAppMessageService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.organization$ = this.dashboardService.getOrganizationById(
      this.activatedRoute.snapshot.params.id
    );
  }

  async removeOrganization(organization) {
    const alert = await this.alertController.create({
      header: 'Warning',
      message: 'Are you sure to delete this organization?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Yes, delete',
          cssClass: 'danger',
          handler: () => {
            this.dashboardService
              .deleteOrganization(organization)
              .subscribe((res) => {
                this.inAppMessageService.simpleToast('The organization has been deleted.', 'bottom');
                this.navController.navigateBack('/organizations');
              });
          },
        },
      ],
    });

    alert.present();
  }
}
