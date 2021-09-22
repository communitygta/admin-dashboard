import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class InAppMessageService {
  constructor(
    private toastController: ToastController,
    private alertController: AlertController
  ) {}

  async simpleToast(
    message: string,
    position: 'top' | 'middle' | 'bottom' = 'middle',
    duration: number = 2000
  ) {
    const toast = await this.toastController.create({
      message,
      duration,
      position,
      keyboardClose: true,
      cssClass: 'simple-toast',
      color: 'medium'
    });

    return toast.present();
  }

  async simpleAlert(
    header: string,
    message: string,
    okText: string = 'OK',
    backdropDismiss = false,
    handler = () => {}
  ) {
    const alert = await this.alertController.create({
      header,
      message,
      backdropDismiss,
      buttons: [{
        text: okText,
        handler,
      }]
    });

    return alert.present();
  }
}
