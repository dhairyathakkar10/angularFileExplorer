import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fileExplorer';
  store:any = []
  constructor(){
    let temp:any = localStorage.getItem("store");
    this.store = JSON.parse(temp);
  }
}
