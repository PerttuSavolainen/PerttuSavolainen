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
        title: "Hummingbird",
        info: "Lisää svg-animointia snap.svg:llä. Svg tehty Adobe Illustratorilla.",
        image: "assets/hummingbird.svg",
        wrapperId: "hummingbirdWrapper",
        code: (wrapperId: string, imageUrl: string, animationOffset: number = 0) => {

          if (this.assetLoaded === false) {

            //this.assetLoaded = true;

            let s = Snap("#" + wrapperId);

            // load svg dynamically
            let l = Snap.load(imageUrl, (data) => {
              //console.log(data);

              let svgCircles = data.selectAll('circle, path, ellipse');
              //console.log(svgPaths);
              svgCircles.forEach( (el, index) => {

                // bouncing box
                let bbox = el.getBBox();

                el.attr({
                  transform: "s"+ 0 + "," + 0 + ","+ bbox.cx + "," +  bbox.cy
                });

                setTimeout(()=>{
                  el.animate({ transform: "s1,1," + bbox.cx + "," + bbox.cy }, 500, function (n) {
                    if (n == !!n) {
                      return n;
                    }
                    return Math.pow(2, -10 * n) * Math.sin((n - .075) *
                        (2 * Math.PI) / .3) + 1;
                  });
                }, animationOffset);

              });

              s.append(data);
            });
          }
        }
      },
      {
        type: "svg",
        title: "Lightbulb",
        info: "Adobe Illustratorilla tehty svg, animoitu snap.svg:llä.",
        image: "assets/lightbulb.svg",
        wrapperId: "lightbulbWrapper",
        code: (wrapperId: string, imageUrl: string, animationOffset: number = 0) => {

          if (this.assetLoaded === false) {

            // TODO find something different solution to prevent appending multiple times
            this.assetLoaded = true;

            let s = Snap("#" + wrapperId);

            // load svg dynamically
            let l = Snap.load(imageUrl, (data) => {
              console.log(data);

              let svgPaths = data.selectAll('path');

              svgPaths.forEach( (el, index) => {

                // bouncing box
                let bbox = el.getBBox();

                el.attr({
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
                }, 50*index*animationOffset);



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
        title: "Streamgull taustakuva",
        info: "Ionic 2 -projektin grafiikkaa.",
        image: "assets/sg-bg-1280.jpg"
      },
      {
        type: "canvas",
        title: "JavaScript-testausta",
        info: " Jotain pientä canvasilla.",
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
