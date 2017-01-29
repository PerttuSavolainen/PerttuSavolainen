import { Component, OnInit } from '@angular/core';
import {portfolioItem} from "../interfaces";

@Component({
  selector: 'app-webpages',
  templateUrl: './webpages.component.html',
  styleUrls: ['./webpages.component.css']
})
export class WebpagesComponent implements OnInit {

  webpageItems: portfolioItem[];

  constructor() { }

  ngOnInit() {
    this.webpageItems = [
      {
        title: "Portfolio",
        info: "Portfolio site for a client. Made with WordPress and Fullpage.js -library. Site's artwork is from a client.",
        image: "assets/r2graphics.jpg",
        link: "http://r2graphics.fi/"
      },
      {
        title: "A gaming event",
        info: "Our cooperative society organized a gaming event.",
        image: "assets/powerlan.jpg",
        link: "http://powerlan.fi/"
      },
      {
        title: "'An inside job'",
        info: "Our cooperative society needed a web page.",
        image: "assets/DynamIT.jpg",
        link: "http://dynamit.fi/"
      },
      {
        title: "Web page for a client",
        info: "A static webpage for a client. Made using Bootstrap.",
        image: "assets/taapero.jpg"
      }
    ];

  }

}
