import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  scrollTimeout: any;
  iconInterval: any;
  iconWrapper: Element;
  frontSection: Element;

  constructor(){}

  ngOnInit(){
    this.iconWrapper = document.querySelector("div#front-icons");
    // place static height to front section,
    // it prevents content jumping on mobile devices
    this.frontSection = document.querySelector("section.front");
    this.frontSection.setAttribute("style", "height: " + this.frontSection.clientHeight + "px");

    window.addEventListener('scroll', this.scrollEvent);

    // animate characters on at a time
    let logoSpans = document.querySelectorAll(".logo-wrapper h1 span:not(.name)");
    setTimeout(() => {
      for (let i=0; i<logoSpans.length; i++) {
        setTimeout(() => {
          logoSpans[i].classList.add("manual-hover");
          setTimeout(() => {
            logoSpans[i].classList.remove("manual-hover");
          }, (i+1)*75);
        }, i*75);
      }

      // add icon animation for the header
      this.iconAnimation();
      this.addVisibilityChange();

    }, 2000);

  }

  scrollEvent(e: Event){

    let getScrollAmount: Function = function(){
      return (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);
    };

    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(()=>{
      //console.log(getScrollAmount());
      if (typeof this.iconWrapper === "undefined") this.iconWrapper = document.querySelector("div#front-icons");
      this.iconWrapper.setAttribute("style", "transform: translateY(" + getScrollAmount()/15 + "%)");
    }, 5);

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

  iconAnimation(){
      this.iconInterval = window.setInterval(() => { this.createIcon(this.iconWrapper) }, 500);
  }

  /*
   * @param elem where you want icon to be created
   */
  createIcon(elem){

    // icons array
    let icons: Array<string> = [
      'fa-database',
      'fa-cube',
      'fa-commenting',
      'fa-github',
      'fa-html5',
      'fa-css3',
      'fa-wordpress',
      'fa-folder-open',
      'fa-tablet'
    ];

    let checkAnimationEndEvent: Function = function() {
      let a;
      let elem = document.createElement("fakeelement");
      let animations = {
        'animation': 'animationend',
        'webkitAnimation': 'webkitAnimationEnd'
      };

      for (a in animations) {
        if (elem.style[a] !== undefined) {
          return animations[a];
        }
      }

      return null;

    };

    let deleteElem: Function = function(elem) {
      elem.parentNode.removeChild(elem);
    };

    let curIcon = icons[Math.round(Math.random()*(icons.length-1))];
    let iconNumber = Math.round(Math.random()*8+1);
    // create new element and add needed classes etc
    let newIcon = document.createElement("i");
    newIcon.classList.add("rand-icon");
    newIcon.classList.add("fa");
    newIcon.classList.add(curIcon);
    newIcon.classList.add("icon-size-" + iconNumber);
    newIcon.style.left = Math.random()*100 + "%";
    //newIcon.randAmount = Math.random();
    elem.appendChild(newIcon);
    //console.log("created");

    let animEvent = checkAnimationEndEvent();

    if (animEvent) {

      newIcon.addEventListener(animEvent, function(){
        deleteElem(newIcon);
        //console.log("removed with animationend");
      });

    } else {

      setTimeout(function(){
        elem.removeChild(newIcon);
        //console.log("removed with setTimeout");
      }, 20000/iconNumber);

    }

  }

  addVisibilityChange(){
    // is tab active
    document.addEventListener('visibilitychange', function(){
      if (document.hidden) {
        document.title = "Activate me!";
        window.clearInterval(this.iconInterval);
      } else {
        document.title = "Pspf";

        this.iconInterval = window.setInterval(function(){
          this.createIcon(this.iconWrapper);
        }, 250);
      }
    });
  }

}
