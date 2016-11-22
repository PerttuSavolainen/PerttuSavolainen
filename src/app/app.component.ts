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

    // animate characters on at a time
    let logoSpans = document.querySelectorAll(".logo-wrapper h1 span:not(.name)");
    setTimeout(() => {
      for (let i=0; i<logoSpans.length; i++) {
        setTimeout(() => {
          logoSpans[i].classList.add("manual-hover");
          setTimeout(() => {
            logoSpans[i].classList.remove("manual-hover");
          }, (i+1)*50);
        }, i*50);
      }
    }, 2000);

  }

  scrollEvent(e: Event){

    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(()=>{

    }, 100);

  }

  scrollDown(e: Event) {

    let section = document.querySelector("section.front");
    //window.scrollTo(0, section.clientHeight);
    //section.scrollIntoView({block: 'end', behavior: 'smooth'});

    let scrollPos  = window.pageYOffset || document.documentElement.scrollTop;

    this.scrollToEvent(scrollPos, section.clientHeight, 400);

  }

  scrollToEvent(from: number, to: number, duration: number, currentTime: number = 0) {
    if (from <= 0) { from = 0;}
    if (to <= 0) { to = 0;}
    if (currentTime>=duration) return;
    let delta = to-from;
    let progress = currentTime / duration * Math.PI / 2;
    let position = delta * (Math.sin(progress));
    setTimeout(() => {
      document.body.scrollTop = from + position;
      this.scrollToEvent(from, to, duration, currentTime + 10);
    }, 10);
  }


}
