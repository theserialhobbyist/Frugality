import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { DatePipe } from '@angular/common';

import { TabsPage } from '../pages/tabs/tabs';
import { ExpensesPage } from '../pages/expenses/expenses';
import { IncomePage } from '../pages/income/income';
import { BillsPage } from '../pages/bills/bills';
import { OverviewPage } from '../pages/overview/overview';
import { NewdepositPage } from '../pages/newdeposit/newdeposit';
import { EditdepositPage } from '../pages/editdeposit/editdeposit';

import { Backand } from '../providers/backand';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ExpensesPage,
    IncomePage,
    BillsPage,
    OverviewPage,
    NewdepositPage,
    EditdepositPage

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ExpensesPage,
    IncomePage,
    BillsPage,
    OverviewPage,
    NewdepositPage,
    EditdepositPage
  ],
  providers: [DatePipe, Backand]
})
export class AppModule {}
