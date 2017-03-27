import { Component, OnInit } from '@angular/core';
import {portfolioItem} from "../interfaces";

@Component({
  selector: 'app-logos',
  templateUrl: './logos.component.html',
  styleUrls: ['./logos.component.css']
})
export class LogosComponent implements OnInit {

  logoItems: portfolioItem[];

  constructor() { }

  ngOnInit() {
    this.logoItems = [
      {
        title: "Streamgull",
        info: "Logo kouluprojektiin.",
        image: "assets/sg-logo-drop-shadow.png"
      },
      {
        title: "Pics",
        info: "Logo kouluprojektiin.",
        image: "assets/pics-logo.jpg"
      },
      {
        title: "DynamIT",
        info: "Osuuskunnan logo.",
        image: "assets/dynamit-logo.png"
      },

    ];

  }

}
