import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';

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

  showAlert() {
    const alert = this.alertCtrl.create({
      title: '<h4 align="center"> Registro exitoso</h4>',
      subTitle: '<h6 align="justify">Ya haces parte del grupo soy ambiental, ingresa con tu usuario, correo o celular...</h6>',
      buttons: [
        {
          text: 'OK',
          handler: data => {
            this.navCtrl.push(HomePage); //console.log('Cancel clicked');
          }
        }]
    });
    alert.present();
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
