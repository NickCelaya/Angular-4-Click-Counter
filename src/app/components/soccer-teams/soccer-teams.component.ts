import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-soccer-teams',
  templateUrl: './soccer-teams.component.html',
  styleUrls: ['./soccer-teams.component.scss'],
})
export class SoccerTeamsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.teams
  }

  teams= [
    "Real Madrid",
    "Barcelona"
  
  ]


}

