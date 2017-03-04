import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { ExpensesPage } from '../pages/expenses/expenses';
import { IncomePage } from '../pages/income/income';
import { BillsPage } from '../pages/bills/bills';
import { OverviewPage } from '../pages/overview/overview';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ExpensesPage,
    IncomePage,
    BillsPage,
    OverviewPage
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
    OverviewPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
