import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isLampOn: boolean = false;

  constructor(
    private alertCtrl: AlertController
  ) { }

  async turnOnLamp() {
    if (this.isLampOn) {
      const alert = await this.alertCtrl.create({
        header: 'Hay aksi',
        message: 'Lamba zaten acik.',
        buttons: ['Tamam']
      });
      await alert.present();
    } else {
      this.isLampOn = true;
    }
  }

  async turnOffLamp() {
    if (this.isLampOn === false) {
      const alert = await this.alertCtrl.create({
        header: 'Hay aksi',
        message: 'Lamba zaten kapali.',
        buttons: ['Tamam']
      });
      await alert.present();
    } else {
      this.isLampOn = false;
    }
  }

}
