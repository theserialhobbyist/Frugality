import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Income } from '../../models/income';
import { Backand } from '../../providers/backand';
import { NewdepositPage } from '../newdeposit/newdeposit';

@Component({
  selector: 'page-income',
  templateUrl: 'income.html'
})
export class IncomePage {
  NewDepositPage = NewdepositPage;

  incomes: Income[]

  constructor(public navCtrl: NavController, public backandService: Backand ) {
    this.getIncomes()
  }

  private getIncomes() {
    this.backandService.loadIncomes()
    .subscribe(
      data => {
        this.incomes = data.data;
      }
    );
  }

  public removeIncome(id: string) {
    this.backandService.removeIncome(id).subscribe(
      data => {
        this.getIncomes();
      }
    );
  }

  ionViewDidLoad() {
    console.log("incomes page loaded")
  }

  ionViewWillEnter() {
    console.log("incomes page reloaded")
    this.getIncomes()
  }

}
