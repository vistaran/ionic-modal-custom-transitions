import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import {SampleModalPage} from '../sample-modal/sample-modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private modalCtrl: ModalController) {

  }

  openModal() {
    var modal = this.modalCtrl.create(SampleModalPage, {}, {
      enterAnimation: 'modal-translate-up-enter',
      leaveAnimation: 'modal-translate-up-leave'
    });

    modal.onDidDismiss((data: any) => {
    });

    modal.present();
  }

  openScaleModal() {
    var modal = this.modalCtrl.create(SampleModalPage, {}, {
      enterAnimation: 'modal-scale-up-enter',
      leaveAnimation: 'modal-scale-up-leave'
    });

    modal.onDidDismiss((data: any) => {
    });

    modal.present();
  }
}
