import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MyHomePage } from  '../pages/my-home/my-home';
import { HttpServer } from '../providers/http-server';
import { HomeModel } from '../model/Home-model';
import { ShowmePage } from '../pages/showme/showme';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MyHomePage,
    ShowmePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MyHomePage,
    ShowmePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},HttpServer,HomeModel]
})
export class AppModule {}
