import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { AuthService } from '../../services/auth.service';
import { MenuPage } from '../menu/menu';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: String;
  email: string;
  isLogged: boolean;

constructor(
  public navCtrl: NavController,
  public NavParams: NavParams
  ) {} //private auth: AuthService
/*Signup(){
  let f = {user: this.user, pass: this.email}
  this.auth.login(f)
    .subscribe(
      rs => this.isLogged = rs,
      er => console.log(er),
      () => {
        if(this.isLogged){
          this.navCtrl.setRoot(TabsPage)
          .then(data => console.log(data),
        error => console.log(error));
        }else{
          console.log('Acceso denegado');
        }
      }
    )
}*/

Signup(){
  this.navCtrl.push(MenuPage);
}

login(){
  this.navCtrl.push(LoginPage);
}

}
