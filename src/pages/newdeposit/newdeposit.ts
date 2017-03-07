import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Backand } from '../../providers/backand';
import { DatePicker } from 'ionic-native';

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
    this.backandService.addIncome(form.value).subscribe(
      data => {
        console.log("Subscribing did something")
      }
    );
    this.navCtrl.pop();
  }

  incomeForm = {
    description: '',
    amount: 0
  };

  selectDate() {
    DatePicker.show({
      date: new Date(),
      mode: 'date'
    }).then(
      date => console.log('Got date: ', date),
      err => console.log('Error occurred while getting date: ', err)
    );
  }

}
