import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { Loginprovider } from '../providers/loginprovider'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;
  username: any;
  password: any;
  status: any;
  constructor(platform: Platform, public loginProvider:Loginprovider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      this.username = localStorage.getItem('username');
      this.password = localStorage.getItem('password');
      this.status = this.loginProvider.loginSuccess(this.username, this.password);
      if(this.status == "success"){
        this.rootPage = HomePage;
      }
      else{
        this.rootPage = LoginPage;
      }
    });




    
  }
}
