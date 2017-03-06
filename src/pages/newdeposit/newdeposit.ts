import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Backand } from '../../providers/backand';

/*
  Generated class for the Newdeposit page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-newdeposit',
  templateUrl: 'newdeposit.html'
})
export class NewdepositPage {

  constructor(public navCtrl: NavController, public backandService: Backand ) {
  }

  public saveIncome(form) {
    console.log(form.value);
    this.backandService.addIncome(form.value);
  }

  incomeForm = {
    description: '',
    amount: 0
  };

}
