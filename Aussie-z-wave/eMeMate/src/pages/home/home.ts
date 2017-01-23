import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RoomsPage } from '../rooms/rooms';
import { CategoryPage } from '../category/category';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tab1Root = RoomsPage;
  tab2Root = CategoryPage;
  constructor(public navCtrl: NavController) {
    
  }

logout(){
    localStorage.clear();
    this.navCtrl.setRoot(LoginPage);
  }
}
