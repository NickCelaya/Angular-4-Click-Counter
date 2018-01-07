//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

//components
import { AppComponent } from './app.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { DataComponent } from './components/data/data.component';
import { StarwarsComponent } from './components/starwars/starwars.component';

//services
import { DataService } from "./services/data.service";
import { StarwarsService } from "./services/starwars.service";

//routes.. app routes comes from imports array where RouterModule is being used 
const appRoutes: Routes = [
  {
    path: "data",
    component: DataComponent
  },
  {
    path: "starwars",
    component: StarwarsComponent
  }
]

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
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],

  //services
  providers: [
    DataService,
    StarwarsService
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
