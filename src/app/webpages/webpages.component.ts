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
        info: "Portfoliosivut asiakkaalle. Toteuttiin WordPressillä ja Fullpage.js -kirjastoa hyödyntäen. Sivun grafiikka on asiakkaalta.",
        image: "assets/r2graphics.jpg",
        link: "http://r2graphics.fi/"
      },
      {
        title: "Pelitapahtuma",
        info: "Osuuskuntamme järjesti pelitapahtuman, joka tarvitsi verkkosivut.",
        image: "assets/powerlan.jpg",
        link: "http://powerlan.fi/"
      },
      {
        title: "DynamIT-sivut",
        info: "Osuuskuntamme tarvitsi verkkosivut.",
        image: "assets/DynamIT.jpg",
        link: "http://dynamit.fi/"
      },
      {
        title: "Verkkosivut asiakkaalle",
        info: "Staattiset verkkosivut asiakkaalle. Toteutettu Bootstrapillä.",
        image: "assets/taapero.jpg"
      }
    ];

  }

}
