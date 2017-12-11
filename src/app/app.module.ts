//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

//components
import { AppComponent } from './app.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { DataComponent } from './components/data/data.component';

//services
import {DataService} from "./services/data.service"


@NgModule({

  //components
  declarations: [
    AppComponent,
    VideoListComponent,
    DataComponent,
  ],

  //modules
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],

  //services
  providers: [
    DataService
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
