import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DashboardService } from 'src/app/core/services/dashboard.service';
import { InAppMessageService } from 'src/app/core/services/in-app-message.service';

@Component({
  selector: 'app-neighbourhoods',
  templateUrl: './neighbourhoods.page.html',
  styleUrls: ['./neighbourhoods.page.scss'],
})
export class NeighbourhoodsPage implements OnInit {

  neighbourhoods$ = this.dashboardService.getAllNeighbourhoods();
  newNeighbourhoodName: string;

  constructor(
    private dashboardService: DashboardService,
    private inAppMessageService: InAppMessageService,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  create() {
    if (!this.newNeighbourhoodName) {
      this.inAppMessageService.simpleToast(
        'Please input a name for the new neighbourhood',
        'top'
      );
      return;
    }
    this.dashboardService
      .createNeighbourhood({ name: this.newNeighbourhoodName })
      .subscribe((res) => {
        this.newNeighbourhoodName = null;
        this.neighbourhoods$ = this.dashboardService.getAllNeighbourhoods();
      });
  }

  async delete(neighbourhood) {
    const alert = await this.alertController.create({
      header: 'Hint',
      message: 'Are you sure to delete this neighbourhood?',
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
            this.dashboardService.deleteNeighbourhood(neighbourhood).subscribe((res) => {
              this.inAppMessageService.simpleToast(
                'The neighbourhood has been deleted',
                'bottom'
              );
              this.neighbourhoods$ = this.dashboardService.getAllNeighbourhoods();
            });
          },
        },
      ],
    });

    alert.present();
  }

}
