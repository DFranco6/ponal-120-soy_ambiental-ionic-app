import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { DownloadPage } from '../download/download';
import { TerminosPage } from '../terminos/terminos';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = DownloadPage;
  tab5Root = TerminosPage;
  constructor() {

  }
}
