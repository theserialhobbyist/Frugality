import { Component } from '@angular/core';
import { ExpensesPage } from '../expenses/expenses';
import { IncomePage } from '../income/income';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = ExpensesPage;
  tab2Root: any = IncomePage;
  tab3Root: any = ContactPage;

  constructor() {

  }
}
