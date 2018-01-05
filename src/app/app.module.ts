//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

//components
import { AppComponent } from './app.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { DataComponent } from './components/data/data.component';
import { StarwarsComponent } from './components/starwars/starwars.component'

//services
import { DataService } from "./services/data.service";
import { StarwarsService } from "./services/starwars.service"


@NgModule({

  //components
  declarations: [
    AppComponent,
    VideoListComponent,
    DataComponent,
    StarwarsComponent,
  ],

  //modules
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],

  //services
  providers: [
    DataService,
    StarwarsService
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
