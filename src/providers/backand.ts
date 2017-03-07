import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Income } from '../models/income';

/*
Generated class for the Backand provider.

See https://angular.io/docs/ts/latest/guide/dependency-injection.html
for more info on providers and Angular 2 DI.
*/

@Injectable()
export class Backand {
  auth_token: {header_name: string, header_value: string} = {header_name: 'AnonymousToken', header_value: 'b2b65b91-e25e-4464-944c-d178ebdb3170'};
  api_url: string = 'https://api.backand.com';
  app_name: string = 'frugality';

  constructor(public http: Http) {}



  private authHeader() {
    var authHeader = new Headers();
    authHeader.append(this.auth_token.header_name, this.auth_token.header_value);
    return authHeader;
  }

  public loadIncomes() {
    let loadURL = this.http.get(this.api_url + '/1/objects/incomes', {
      headers: this.authHeader()
    })
    .map(res => res.json())

    console.log(loadURL)

    return loadURL
  }

  public addIncome(formData) {
    console.log("addIncome is running")

    let postURL = this.http.post(this.api_url + '/1/objects/incomes', formData,
    {
      headers: this.authHeader(),

    }).map(res => {
      return res.json();
    })

    console.log(postURL)

    return postURL
  }

  public removeIncome(id: string) {
    return this.http.delete(this.api_url + '/1/objects/incomes/' + id,
    {
      headers: this.authHeader()
    })
    .map(res => {
      return res.json();
    });
  }

}
