import { Component, ViewChild} from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';
import { DownloadPage } from '../pages/download/download';
import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
@ViewChild('content') content: Nav;
public rootPage: any;
public pages: Array<{titulo: string, Component: any, icon: string}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
  
    this.rootPage = HomePage;
    this.pages = [
      //confiracion de menus
      { titulo: 'Inicio',     Component: HomePage,    icon: 'home'},
      { titulo: 'Descargas',     Component: DownloadPage, icon: 'md-cloud-download'},
      { titulo: 'Contacto',     Component: ContactPage,     icon: 'mail'},
      { titulo: 'Acerca De',     Component: AboutPage,  icon: 'information-circle'}
    ];

  
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goToPage(page){
    this.content.setRoot(page)
  }
}
