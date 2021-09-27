import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DashboardService } from 'src/app/core/services/dashboard.service';
import { InAppMessageService } from 'src/app/core/services/in-app-message.service';

@Component({
  selector: 'app-focuses',
  templateUrl: './focuses.page.html',
  styleUrls: ['./focuses.page.scss'],
})
export class FocusesPage implements OnInit {
  focuses$ = this.dashboardService.getAllFocuses();
  newFocusName: string;

  constructor(
    private dashboardService: DashboardService,
    private inAppMessageService: InAppMessageService,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  create() {
    if (!this.newFocusName) {
      this.inAppMessageService.simpleToast(
        'Please input a new focus name',
        'top'
      );
      return;
    }
    this.dashboardService
      .createFocus({ name: this.newFocusName })
      .subscribe((res) => {
        this.newFocusName = null;
        this.focuses$ = this.dashboardService.getAllFocuses();
      });
  }

  async delete(focus) {
    const alert = await this.alertController.create({
      header: 'Hint',
      message: 'Are you sure to delete this focus?',
      buttons: [
        {
          role: 'cancel',
          handler: () => {},
          text: 'Cancel',
        },
        {
          text: 'Yes, delete',
          cssClass: 'danger',
          handler: () => {
            this.dashboardService.deleteFocus(focus).subscribe((res) => {
              this.inAppMessageService.simpleToast(
                'The focus has been deleted',
                'bottom'
              );
              this.focuses$ = this.dashboardService.getAllFocuses();
            });
          },
        },
      ],
    });

    alert.present();
  }
}
