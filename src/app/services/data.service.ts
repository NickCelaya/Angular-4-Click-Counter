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

  public getData() {
    return this._http.get(this.baseUrl)
      .map((response: any) => {
        return response.results
      })
  }

  public getInfo(): Observable<any> {
    return this._http.get(this.baseUrl)
    .map((response: any) => response.results)
  }

  //end of service
}



// import { HttpClient } from '@angular/common/http';
// import { environment } from '../../environments/environment';

// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/throw';
// @Injectable()
// export class ScopesService {

//   private _Url;
//   private _DocumentUrl;

//   constructor(private _httpClient: HttpClient) {
//     this._Url = `${environment.authSvc}scope/`;
//   }

//   getAll() {
//     return this._httpClient.get(this._Url, { responseType: 'text' })
//       .map(res => JSON.parse(res))
//       .catch(this.handleError);
//   }

//   private handleError(error: Response) {
//     // console.error(error);
//     // return Observable.throw(error.json().error || 'Server error');
//     return Observable.throw(JSON.stringify(error));
//   }
// }