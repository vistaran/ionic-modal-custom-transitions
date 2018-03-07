import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SampleModalPage } from './sample-modal';

@NgModule({
  declarations: [
    SampleModalPage,
  ],
  imports: [
    IonicPageModule.forChild(SampleModalPage),
  ],
})
export class SampleModalPageModule {}
