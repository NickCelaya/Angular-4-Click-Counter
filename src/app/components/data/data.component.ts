import { Component, OnInit } from '@angular/core';
import { DataService } from "./../../services/data.service";
import { Subscription } from "rxjs/RX"
import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
  providers: [DataService]

})
export class DataComponent implements OnInit {

  public info: any
  public response: any
  public name = "";
  public error: any;

  constructor(public DataService: DataService) { }

  

  ngOnInit() {
    this.getInfo()
  }

  
  getInfo(){
    this.info = this.DataService.getData()
      .subscribe( (response) => {
        this.response = response
        console.log("Got Data")
      }, (error) => {
        this.error = error
        console.log("No Data")
      })
  }

  
  
//end of component
}


//getGroups() {
  //     this.sub = this.groupService.getAll()
  //       .subscribe(response => {
  //           const groups = response.response.groups;
  //           this.data.rows = groups;
  //         },
  //         error => {
  //           this.errorMessage = < any > error;
  //         });
  //   }




// import { Subscription} from 'rxjs/Rx';
// import { GroupService } from '../../../services/group.service';
// import { Component, OnInit,OnDestroy,EventEmitter } from '@angular/core';
// import { Router } from '@angular/router';
// import { SearchService } from '../services/search.service';
// import { Subject } from 'rxjs/Subject';
// import { GroupListDataModel } from '../models/group-list-datamodel';

// @Component({
//   selector: 'polaris-groups-list',
//   templateUrl: './groups-list.component.html',
//   styleUrls: ['./groups-list.component.scss'],
//   providers: [SearchService]
// })
// export class GroupsListComponent implements OnInit, OnDestroy {

//   public searchTerm$ = new Subject < string > ();
//   public userInput: string;
//   public hasErrored: boolean;
//   public hasSearched: boolean;
//   public sub: Subscription;
//   public errorMessage: string;
//   public results: object;
//   public data: GroupListDataModel;

//   constructor(
//     public groupService: GroupService,
//     public router: Router,
//     public searchService: SearchService,
//   ) {
//     this.userInput = '';
//     this.hasSearched = false;
//     this.hasErrored = false;
//     this.data = new GroupListDataModel();

//     this.searchService.search(this.searchTerm$)
//       .subscribe(results => {
//           this.hasSearched = true;
//           this.userInput = '';
//           this.data.rows = results.groups;
//         },
//         error => {
//           this.userInput = '';
//           this.hasSearched = true;
//           this.hasErrored = true;
//           this.errorMessage = < any > error;
//         });
//   }

//   ngOnInit() {
//     this.getGroups();
//   }

//   getGroups() {
//     this.sub = this.groupService.getAll()
//       .subscribe(response => {
//           const groups = response.response.groups;
//           this.data.rows = groups;
//         },
//         error => {
//           this.errorMessage = < any > error;
//         });
//   }

//   ngOnDestroy() {

//     if (this.sub) {
//       this.sub.unsubscribe();
//     }
//   }

//   redirectToDetails(event) {
//     const group_id = event.selected[0].group_id;
//     this.router.navigateByUrl(`groups/details/${group_id}`);
//   }
// }