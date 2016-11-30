import { Component, OnInit } from '@angular/core';
import {hypeItem} from "../interfaces";

@Component({
  selector: 'app-who',
  templateUrl: './who.component.html',
  styleUrls: ['./who.component.css']
})

export class WhoComponent implements OnInit {

  public hypes: hypeItem[];

  constructor() { }

  ngOnInit() {
    this.hypes = [
      {
        title: "TypeScript",
        info: "Strict superset of JavaScript.",
        link: "https://www.typescriptlang.org/"
      },
      {
        title: "Angular 2",
        info: "Awesome JavaScript framework.",
        link: "https://angular.io/"
      },
      {
        title: "Sass",
        info: "CSS extension language.",
        link: "http://sass-lang.com/"
      },
      {
        title: "Firebase",
        info: "Google's development platform with many features.",
        link: "https://firebase.google.com/"
      },
      {
        title: "Gulp",
        info: "Tool for automating and enhancing your workflow.",
        link: "http://gulpjs.com/"
      }


    ];
  }

}
