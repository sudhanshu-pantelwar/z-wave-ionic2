import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Loginprovider } from '../../providers/loginprovider';
import { HomePage } from '../home/home';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  username: any;
  password: any;
  status: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loginProvider: Loginprovider) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

login(){
  this.status = this.loginProvider.loginSuccess(this.username, this.password);
  console.log(this.username, this.password, this.status);
  if(this.status=="success"){
    localStorage.setItem('username', this.username);
    localStorage.setItem('password', this.password);
    this.navCtrl.push(HomePage);

  }
}
}
