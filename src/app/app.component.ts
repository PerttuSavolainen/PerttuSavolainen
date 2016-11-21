import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  scrollTimeout: any;

  constructor(){
    window.addEventListener('scroll', this.scrollEvent);



  }

  ngOnInit(){
    // place static height to front section,
    // it prevents content jumping on mobile devices
    let section = document.querySelector("section.front");
    section.setAttribute("style", "height: " + section.clientHeight + "px");
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
