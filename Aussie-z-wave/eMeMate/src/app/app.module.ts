import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RoomsPage } from '../pages/rooms/rooms';
import { CategoryPage } from '../pages/category/category';
import { Loginprovider } from '../providers/loginprovider'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    CategoryPage,
    RoomsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    CategoryPage,
    RoomsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Loginprovider]
})
export class AppModule {}
