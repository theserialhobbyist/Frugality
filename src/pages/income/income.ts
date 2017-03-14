import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Income } from '../../models/income';
import { Backand } from '../../providers/backand';
import { NewdepositPage } from '../newdeposit/newdeposit';
import { EditdepositPage } from '../editdeposit/editdeposit';

@Component({
  selector: 'page-income',
  templateUrl: 'income.html'
})
export class IncomePage {
  NewDepositPage = NewdepositPage;
  EditDepositPage = EditdepositPage;

  incomes: Income[]

  constructor(public navCtrl: NavController, public backandService: Backand ) {
    this.getIncomes(1)
  }

  private getIncomes(page) {
    this.backandService.loadIncomes(page)
    .subscribe(
      data => {
        this.incomes = data.data;
      }
    );
  }

  doInfinite(infiniteScroll) {


    if (this.incomes.length%20){
      console.log('End of list has been reached');
      infiniteScroll.complete();
    }else{
      console.log('Begin async operation');
      var pageToLoad = (this.incomes.length/20) + 1

      this.backandService.loadIncomes(pageToLoad)
      .subscribe(
        data => {
          this.incomes = this.incomes.concat(data.data);
          infiniteScroll.complete()
          console.log('Async operation loaded new data');
        }
      );

      setTimeout(() => {
        console.log('Async operation has timed out');
        infiniteScroll.complete();
      }, 3000);
    }
  }

  public removeIncome(id: string) {
    this.backandService.removeIncome(id).subscribe(
      data => {
        this.getIncomes(1);
      }
    );
  }

  ionViewDidLoad() {
    console.log("incomes page loaded")
  }

  ionViewWillEnter() {
    console.log("incomes page reloaded")
    this.getIncomes(1)
  }

}
