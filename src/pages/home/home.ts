import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { MenuPage } from '../menu/menu';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  // creacion de enlace Boton para ir a otra pagina
  continua(){
    this.navCtrl.push(AboutPage);
  }
// clase menu
  menu(){
    this.navCtrl.push(MenuPage);
  }
}
