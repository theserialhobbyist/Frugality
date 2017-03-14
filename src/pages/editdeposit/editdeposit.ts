import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { Backand } from '../../providers/backand';
import { DatePicker } from 'ionic-native';

/*
Generated class for the Newdeposit page.

See http://ionicframework.com/docs/v2/components/#navigation for more info on
Ionic pages and navigation.
*/

@Component({
  selector: 'page-editdeposit',
  templateUrl: 'editdeposit.html'
})

export class EditdepositPage {

  private SelectedDate;

  private NewIncome : FormGroup;

  constructor(public navCtrl: NavController, public backandService: Backand, private formBuilder: FormBuilder, private datePipe: DatePipe ) {

    this.NewIncome = this.formBuilder.group({
      description: ['', Validators.required],
      amount: ['', Validators.required]
    });
    this.SelectedDate = this.datePipe.transform( new Date(), 'MM/dd/yyyy HH:mm:ss');
  }

  saveIncome() {
    console.log("Selected Date:", this.SelectedDate)
    console.log("Original Form Data:", this.NewIncome.value)

    var completeData = {"date": this.SelectedDate, "description": this.NewIncome.value.description, "amount": this.NewIncome.value.amount}

    console.log("Complete Data", completeData)

    this.backandService.addIncome(completeData).subscribe(
      data => { }
    );
    this.navCtrl.pop();
  }

  selectDate() {
    DatePicker.show({
      date: new Date(),
      mode: 'date'
    }).then(
      date => {
        this.SelectedDate = this.datePipe.transform( date, 'MM/dd/yyyy HH:mm:ss');
      },
      err => console.log('Error occurred while getting date: ', err)
    );
  }

}
