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
        info: "Logo for a school project.",
        image: "assets/sg-logo-drop-shadow.png"
      },
      {
        title: "Pics",
        info: "Logo for a school project.",
        image: "assets/pics-logo.jpg"
      },
      {
        title: "DynamIT",
        info: "Cooperative society's logo.",
        image: "assets/dynamit-logo.png"
      },

    ];

  }

}
