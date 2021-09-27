import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DashboardService } from 'src/app/core/services/dashboard.service';
import { InAppMessageService } from 'src/app/core/services/in-app-message.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.page.html',
  styleUrls: ['./languages.page.scss'],
})
export class LanguagesPage implements OnInit {
  languages$ = this.dashboardService.getAllLanguages();
  newLanguageName: string;

  constructor(
    private dashboardService: DashboardService,
    private inAppMessageService: InAppMessageService,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  create() {
    if (!this.newLanguageName) {
      this.inAppMessageService.simpleToast(
        'Please input a new language name',
        'top'
      );
      return;
    }
    this.dashboardService
      .createLanguage({ name: this.newLanguageName })
      .subscribe((res) => {
        this.newLanguageName = null;
        this.languages$ = this.dashboardService.getAllLanguages();
      });
  }

  async delete(focus) {
    const alert = await this.alertController.create({
      header: 'Hint',
      message: 'Are you sure to delete this language?',
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
            this.dashboardService.deleteLanguage(focus).subscribe((res) => {
              this.inAppMessageService.simpleToast(
                'The language has been deleted',
                'bottom'
              );
              this.languages$ = this.dashboardService.getAllLanguages();
            });
          },
        },
      ],
    });

    alert.present();
  }
}
