import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DashboardService } from 'src/app/core/services/dashboard.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.page.html',
  styleUrls: ['./program.page.scss'],
})
export class ProgramPage implements OnInit {
  program$: Observable<any>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dashboardService: DashboardService,
    private navController: NavController,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.program$ = this.dashboardService.getProgramById(
      this.activatedRoute.snapshot.params.id
    );
  }

  async removeProgram(program) {
    const alert = await this.alertController.create({
      header: 'Warning',
      message: 'Are you sure to delete this program?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Yes, delete',
          cssClass: 'danger',
          handler: () => {
            this.dashboardService.removeProgram(program).subscribe((res) => {
              this.navController.navigateBack('/programs');
            });
          },
        },
      ],
    });

    alert.present();
  }
}
