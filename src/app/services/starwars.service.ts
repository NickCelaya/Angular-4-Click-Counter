import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch'
import { query } from '@angular/core/src/animation/dsl';

@Injectable()
export class StarwarsService {

  private baseUrl;

  constructor(private http: HttpClient ) {
    this.baseUrl = "https://swapi.co/api/planets"
   }

public getData(){
  return this.http.get(this.baseUrl)
    .map( (response: any) => {
      console.log(response.results, "StarWars Service")
      return response.results
    })
}

//end of service
}

