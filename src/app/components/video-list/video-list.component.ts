import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  title = "VideoList"
  videoList = [
      {
        name: "Item 1",
        slug: "item-1"
      },
      {
        name: "Item 2",
        slug: "item-2"
      },
      {
        name: "Item 3",
        slug: "item-3"
      },
      {
        name: "Real Madrid",
        slug: "item-4"
      },
      {
        name: "Barcelona",
        slug: "item-5"
      },
  ]; 
  constructor() { }

  ngOnInit() {
  }

  

}
