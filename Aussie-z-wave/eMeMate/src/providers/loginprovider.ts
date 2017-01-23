import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Loginprovider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Loginprovider {

  constructor(public http: Http) {
    console.log('Hello Loginprovider Provider');
  }

loginSuccess(username, password){
  
  if(username == 'sud@gmail.com' && password == 'sud1234'){
      //localStorage.clear();
      return "success";
    }
  else{
    return "failure";
  }

}
}
