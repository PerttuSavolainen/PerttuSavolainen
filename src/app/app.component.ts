import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {setTimeout} from "timers";
//import * as d3 from "d3";
//import {scaleLinear} from "d3-scale";

declare var Snap: any;
declare var componentHandler: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewChecked {

  scrollTimeout: any;
 // iconWrapper: Element;
  frontSection: Element;

  constructor(){}

  ngOnInit(){
    //this.iconWrapper = document.querySelector("div#front-icons");
    // place static height to front section,
    // it prevents content jumping on mobile devices
    this.frontSection = document.querySelector("section.front");
    this.frontSection.setAttribute("style", "height: " + this.frontSection.clientHeight + "px");

    // TODO sniff if user is using mobile device, otherwise apply scroll event
    if (window.innerWidth >= 992) window.addEventListener('scroll', this.scrollEvent);

    this.addVisibilityChange();

    let s = Snap("#svgWrapper");
    console.log(s);

    // load svg dynamically
    Snap.load('assets/lightbulb.svg', (data) => {
      console.log(data);

      let nestedSvg = data.select('svg');
      let svgPaths = data.selectAll('path');
      //console.log(svgPaths);
      svgPaths.forEach( (el, index) => {

        // bouncing box
        let bbox = el.getBBox();

        el.attr({
          opacity: 0.15,
          //fill: "rgba(255,255,255,0.25)",
          fill: "#fff",
          transform: "s"+ 0 + "," + 0 + ","+ bbox.cx + "," +  bbox.cy
        });

        setTimeout(()=>{
          el.animate({ transform: "s1,1," + bbox.cx + "," + bbox.cy }, 1000, (n) => {
            if (n == !!n) return n;
            return Math.pow(2, -10 * n) * Math.sin((n - .075) * (2 * Math.PI) / .3) + 1;
          });
        }, 50*index);

        el.hover(() => {
          el.animate({ transform: "s0.75,0.75," + bbox.cx + "," + bbox.cy }, 1000, (n) => {
            if (n == !!n) return n;
            return Math.pow(2, -10 * n) * Math.sin((n - .075) * (2 * Math.PI) / .3) + 1;
          }, () => {
            el.animate({transform: "s1,1," + bbox.cx + "," + bbox.cy}, 1000, (n) => {
              if (n == !!n) return n;
              return Math.pow(2, -10 * n) * Math.sin((n - .075) * (2 * Math.PI) / .3) + 1;
            });
          });
        });

      });

      s.append(data);

    });


  }

  ngAfterViewChecked() {
    componentHandler.upgradeAllRegistered();
  }

  scrollEvent(e: Event){

    let getScrollAmount: Function = () => {
      return (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);
    };

    document.getElementById("svgWrapper").setAttribute("style", "transform: translateY(" + getScrollAmount()/15 + "%)");

  }

  scrollDown(e: Event) {

    let section = document.querySelector("section.front");
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

  addVisibilityChange(){
    // is tab active
    document.addEventListener('visibilitychange', function(){
      if (document.hidden) {
        document.title = "Hei, älä karkaa!";
      } else {
        document.title = "Potfolio | Perttu Savolainen";
      }
    });
  }

}
