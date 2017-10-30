import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class DataService {

  private baseUrl;

  constructor(private _http: HttpClient) {
    this.baseUrl = "https://swapi.co/api/people"
  }

  getData() {
    return this._http.get(this.baseUrl, { responseType: "text" })
      .map((response) => {
       const dataObject = Object.assign({}, JSON.parse(response));
        console.log(dataObject, "NICK");
      })
      
  }



  //end of service
}