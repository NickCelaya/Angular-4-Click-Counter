import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<h1 class="test">Hello {{name}} how are you?</h1>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  name = "nick"
  
}


