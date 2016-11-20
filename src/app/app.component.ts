import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  scrollTimeout: any;

  constructor(){
    window.addEventListener('scroll', this.scrollEvent);
  }

  scrollEvent(e: Event){

    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(()=>{

    }, 100);

  }

  scrollDown(e: Event) {

    let section = document.querySelector("section.front");
    window.scrollTo(0, section.clientHeight);
  }

}
