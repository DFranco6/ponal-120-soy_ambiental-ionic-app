import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { LoginPage } from '../login/login';
/**
 * Generated class for the RegistrarsePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrarse',
  templateUrl: 'registrarse.html',
})
export class RegistrarsePage {

  myregistro: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, public alertCtrl: AlertController) {
    this.myregistro = {};
   /* this.myregistro = this.fb.group({
      name: ['', [Validators.required]],
      company: ['', [Validators.required]],
      email: ['', [Validators.required]],
      age: ['', [Validators.required]],
      url: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarsePage');
  }
 
  menu(){
    this.navCtrl.push(LoginPage);
  }

  /*saveData(){
    alert(JSON.stringify(this.myregistro.value));
  }*/
}
