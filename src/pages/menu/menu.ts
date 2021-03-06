import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { MuroPage } from '../muro/muro';
import { TerminosPage } from '../terminos/terminos';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  // creacion de enlace Boton para ir a otra pagina
  continua(){
    this.navCtrl.push(AboutPage);
  }

  muro(){
    this.navCtrl.push(MuroPage);
  }

  terminos(){
    this.navCtrl.push(TerminosPage);
  }
}
