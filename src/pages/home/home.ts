import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistrarsePage } from '../registrarse/registrarse';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }
  // creacion de enlace Boton para ir a otra pagina

  registro(){
    this.navCtrl.push(RegistrarsePage);
  }

  login(){
    this.navCtrl.push(LoginPage);
  }
  // clase para mensaje de ingreso desde boton loguin
  showPrompt() {
    const prompt = this.alertCtrl.create({
      title: '<h4 align="center">Inicio de Sesion</h4>',
      message: '<h6 align="justify">Ingrese nombre de usuario, correo o numero celular</h6>',
      inputs: [
        {
          name: 'Usuario',
          placeholder: 'Usuario'
        },
        {
          name: 'Correo',
          placeholder: 'Correo'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ingresar',
          handler: data => {
            this.navCtrl.push(MenuPage); //console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  
}
