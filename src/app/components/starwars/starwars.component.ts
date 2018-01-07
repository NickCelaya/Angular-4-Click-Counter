import { Component, OnInit } from '@angular/core';
import { StarwarsService } from './../../services/starwars.service'
import { Subscription } from 'rxjs/RX'
import { error } from 'selenium-webdriver';


@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.scss'],
  providers: [StarwarsService]
})
export class StarwarsComponent implements OnInit {

  public person = ""
  public response: any
  public data: any
  public error: any
  public num = 0

  constructor(public StarWarsService: StarwarsService) { }

  ngOnInit() {
    this.getPlanets()
  }


  getPlanets() {
    this.data = this.StarWarsService.getData()
      .subscribe((response) => {
        this.response = response
        console.log(response, "this is the component data")
      }, (error) => {
        console.log("No Data")
      })
  }


  increase() {
    this.num++
  }

  reset() {
    this.num = 0
    //or
    // if(this.num > 0){
    //   this.num = 0
    // }
  }

  double() {
    this.num *= 2
  }


//end of component
}
