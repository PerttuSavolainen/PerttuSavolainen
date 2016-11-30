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
      },
      {
        title: "Random JavaScript asset",
        info: "Just something with canvas.",
        canvas: {
          src: "assets/canvasTriangles.js",
          canvasId: "canvasTriangles"
        }
      }

    ];

    for (let i=0; i<this.assetItems.length; i++) {
      if (this.assetItems[i].canvas != null) this.loadScript(this.assetItems[i].canvas['src']);
    }


  }

  loadScript(url: string){

    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);

  }

}
