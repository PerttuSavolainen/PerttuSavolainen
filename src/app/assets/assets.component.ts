import { Component, OnInit } from '@angular/core';
import {portfolioItem} from "../interfaces";

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {

  assetItems: portfolioItem[];

  constructor() { }

  ngOnInit() {
    this.assetItems = [
      {
        title: "Streamgull background",
        info: "Ionic 2 project asset.",
        image: "assets/sg-bg-1280.jpg"
      }

    ];


  }

}
