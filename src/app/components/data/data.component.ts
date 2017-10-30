import { Component, OnInit } from '@angular/core';
import { DataService } from "./../../services/data.service";
import { Subscription } from "rxjs/RX"

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
  providers: [DataService]

})
export class DataComponent implements OnInit {

  public info: any
  public data: any

  constructor(public DataService: DataService) { }

  ngOnInit() {
    this.getInfo()
  }

  
  getInfo(){
    this.info = this.DataService.getData()
      .subscribe( (response) => {
        this.data = response
      })
      return this.data
  }

  
  
//end of component
}