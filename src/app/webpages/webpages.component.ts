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
        title: "A gaming event",
        info: "Our cooperative society organized a gaming event.",
        image: "assets/powerlan.png",
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
        image: "assets/taapero.png"
      }
    ];

  }

}
