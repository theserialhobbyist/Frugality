import { Component } from '@angular/core';
import { ExpensesPage } from '../expenses/expenses';
import { IncomePage } from '../income/income';
import { OverviewPage } from '../overview/overview';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = OverviewPage;
  tab2Root: any = ExpensesPage;
  tab3Root: any = IncomePage;

  constructor() {

  }
}
