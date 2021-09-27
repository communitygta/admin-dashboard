import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DashboardService } from 'src/app/core/services/dashboard.service';
import { InAppMessageService } from 'src/app/core/services/in-app-message.service';

@Component({
  selector: 'app-population-groups',
  templateUrl: './population-groups.page.html',
  styleUrls: ['./population-groups.page.scss'],
})
export class PopulationGroupsPage implements OnInit {

  populationGroups$ = this.dashboardService.getAllPopulationGroups();
  newPopulationGroupName: string;

  constructor(
    private dashboardService: DashboardService,
    private inAppMessageService: InAppMessageService,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  create() {
    if (!this.newPopulationGroupName) {
      this.inAppMessageService.simpleToast(
        'Please input a new population group name',
        'top'
      );
      return;
    }
    this.dashboardService
      .createPopulationGroup({ name: this.newPopulationGroupName })
      .subscribe((res) => {
        this.newPopulationGroupName = null;
        this.populationGroups$ = this.dashboardService.getAllPopulationGroups();
      });
  }

  async delete(populationGroup) {
    const alert = await this.alertController.create({
      header: 'Hint',
      message: 'Are you sure to delete this population group?',
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
            this.dashboardService.deletePopulationGroup(populationGroup).subscribe((res) => {
              this.inAppMessageService.simpleToast(
                'The population group has been deleted',
                'bottom'
              );
              this.populationGroups$ = this.dashboardService.getAllPopulationGroups();
            });
          },
        },
      ],
    });

    alert.present();
  }

}
