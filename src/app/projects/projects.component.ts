import { Component, OnInit } from '@angular/core';
import {portfolioItem} from "../interfaces";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectItems: portfolioItem[];

  constructor() { }

  ngOnInit() {
    this.projectItems = [
      {
        title: "NFSea",
        info: "Third semester's School project. A research about NFC in Android environment. Contained also a little message sending demo via NFC.",
        image: "assets/nfsea.png",
        link: "https://github.com/CNname/NFSea"
      },
      {
        title: "Pics",
        info: "Second semester's School project. Fictional image service, where users can send and comment images. Project introduced me to a Laravel framework.",
        image: "assets/pics.PNG"
      },
      {
        title: "Lemon Ways - TED",
        info: "Second semester's School project. Web application made with Angular, Google Maps API and Firebase.",
        image: "assets/Lemon-Ways-TED.jpg"
      },
      {
        title: "Need For Music",
        info: "First semester's School project. Html5 web application of music trivia and entertainment.",
        image: "assets/nfm.png"
      }

    ];
  }

}
