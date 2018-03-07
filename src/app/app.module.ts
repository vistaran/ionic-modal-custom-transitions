import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { Config, IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SampleModalPage } from '../pages/sample-modal/sample-modal';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ModalTranslateEnterTransition } from '../transitions/on-enter-translate.transition';
import { ModalTranslateLeaveTransition } from '../transitions/on-leave-translate.transition';
import { ModalScaleEnterTransition } from '../transitions/on-enter-scale.transition';
import { ModalScaleLeaveTransition } from '../transitions/on-leave-scale.transition';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SampleModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SampleModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
  constructor(public config: Config) {
      this.setCustomTransitions();
  }

  private setCustomTransitions() {
      this.config.setTransition('modal-translate-up-enter', ModalTranslateEnterTransition);
      this.config.setTransition('modal-translate-up-leave', ModalTranslateLeaveTransition);
      this.config.setTransition('modal-scale-up-enter', ModalScaleEnterTransition);
      this.config.setTransition('modal-scale-up-leave', ModalScaleLeaveTransition);
  }
}
