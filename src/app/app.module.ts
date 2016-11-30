import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AssetsComponent} from "./assets/assets.component";
import {LogosComponent} from "./logos/logos.component";
import {WebpagesComponent} from "./webpages/webpages.component";

import {ProjectsComponent} from "./projects/projects.component";
import {WhoComponent} from "./who/who.component";

const appRoutes: Routes = [
  //{ path: 'hero/:id', component: HeroDetailComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'webpages', component: WebpagesComponent },
  { path: 'logos', component: LogosComponent },
  { path: 'assets', component: AssetsComponent },
  { path: '', component: WhoComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    WebpagesComponent,
    LogosComponent,
    AssetsComponent,
    WhoComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
