import { Component, OnInit } from '@angular/core';
import {hypeItem} from "../interfaces";
import {DataService} from "../data.service";

@Component({
  selector: 'app-who',
  templateUrl: './who.component.html',
  styleUrls: ['./who.component.css']
})

export class WhoComponent implements OnInit {

  public perks: Array<{ name: string, perkItems: Array<string> }>;
  public interests: Array<{ name: string, field: string }>;
  public events: Array<Object>;
  public repos: Array<Object> = [];
  public user: Object;

  constructor(public dataService: DataService) { }

  ngOnInit() {

    this.perks = [
      {
        name: "Frontend",
        perkItems: [
          "Angular 2",
          "Sass",
        ]
      },
      {
        name: "Backend",
        perkItems: [
          "Node",
          "Express",
          "Mongoose",
          "MongoDB"
        ]
      },
      {
        name: "Other",
        perkItems: [
          "Gulp",
          "WordPress",
          "Laravel"
        ]
      }
    ];

    this.interests = [
      {
        name: "Electron",
        field: "Other"
      },
      {
        name: "KeystoneJS",
        field: "Other"
      }
    ];

    this.githubRepos("PerttuSavolainen");
    this.githubUser("PerttuSavolainen");

  }

  githubEvents(user: string){
    this.dataService.loadUserGithubEvents(user).subscribe(res => {
      this.events = res;
      console.log(this.events);
    });
  }

  githubUser(user: string) {
    this.dataService.loadUserData(user).subscribe(res => {
      this.user = res;
    });
  }

  githubRepos(user: string){
    return this.dataService.loadUserGithubRepos(user).subscribe(res => {
      this.repos = res;
      //console.log(res)
    }, error => {
      // if too many request has sent trough user's ip (unauthorized request count: 60 / h)
      if (error === "Forbidden") {
        this.repos = [];
        this.repos.push({
          name: "Githubin käyttäjäsivulle",
          url: "https://github.com/PerttuSavolainen"
        });
      }
    });
  }

  getRepos(): any {
    return this.repos.filter((item, index)=> index < 5);

  }



}
