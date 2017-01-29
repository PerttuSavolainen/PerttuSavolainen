import { Component, OnInit } from '@angular/core';
import {portfolioItem} from "../interfaces";

declare var Snap: any;

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {

  assetItems: portfolioItem[];
  assetLoaded: boolean;

  constructor() { }

  ngOnInit() {
    this.assetItems = [
      {
        type: "svg",
        title: "Icon collage - lightbulb",
        info: "Random svg with Adobe Illustrator, animated with snap.svg JavaScript library.",
        image: "assets/lightbulb.svg",
        wrapperId: "lightbulbWrapper",
        code: (wrapperId: string, imageUrl: string) => {

          if (this.assetLoaded === false) {

            this.assetLoaded = true;

            let s = Snap("#" + wrapperId);

            // load svg dynamically
            let l = Snap.load(imageUrl, (data) => {
              console.log(data);

              let svgPaths = data.selectAll('path');
              //console.log(svgPaths);
              svgPaths.forEach( (el, index) => {

                // bouncing box
                let bbox = el.getBBox();

                el.attr({
                  //opacity: 0.2,
                  //fill: "rgba(255,255,255,0.25)",
                  transform: "s"+ 0 + "," + 0 + ","+ bbox.cx + "," +  bbox.cy
                });

                setTimeout(()=>{
                  el.animate({ transform: "s1,1," + bbox.cx + "," + bbox.cy }, 1000, function (n) {
                    if (n == !!n) {
                      return n;
                    }
                    return Math.pow(2, -10 * n) * Math.sin((n - .075) *
                        (2 * Math.PI) / .3) + 1;
                  });
                }, 50*index);



               el.hover(() => {
                  el.animate({ transform: "s0.75,0.75," + bbox.cx + "," + bbox.cy }, 1000, function (n) {
                    if (n == !!n) {
                      return n;
                    }
                    return Math.pow(2, -10 * n) * Math.sin((n - .075) *
                        (2 * Math.PI) / .3) + 1;
                  }, () => {
                    el.animate({transform: "s1,1," + bbox.cx + "," + bbox.cy}, 1000, function (n) {
                      if (n == !!n) {
                        return n;
                      }
                      return Math.pow(2, -10 * n) * Math.sin((n - .075) *
                          (2 * Math.PI) / .3) + 1;
                    });
                  });
                });

              });



              s.append(data);
            });
          }
        }
      },
      {
        type: "image",
        title: "Streamgull background",
        info: "Ionic 2 project asset.",
        image: "assets/sg-bg-1280.jpg"
      },
      {
        type: "canvas",
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

    this.assetLoaded = false;


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
