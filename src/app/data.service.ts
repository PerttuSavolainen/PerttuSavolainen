import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Http, Response} from "@angular/http";

@Injectable()
export class DataService {

  private readonly githubApi: string = "https://api.github.com/";

  constructor(private http: Http) { }

  loadUserData(user: string): Observable<any> {
    return this.http.get(`${this.githubApi}users/${user}`)
      .map((res: Response) => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  loadUserGithubEvents(user: string): Observable<any> {
    return this.http.get(`${this.githubApi}users/${user}/events`)
      .map((res: Response) => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  /**
   * Get user's repositories
   *
   * @param user github user name
   * @param type can be all, owner, member
   * @param sort created, updated, pushed, full_name
   * @param direction asc, desc
   * @returns {Observable<R>}
   */
  loadUserGithubRepos(user: string, type: string = "all", sort: string = "updated", direction: string = "desc"): Observable<any> {
    return this.http.get(`${this.githubApi}users/${user}/repos?type=${type}&sort=${sort}&direction=${direction}`)
      .map((res: Response) => res.json())
      .catch((err: any) => Observable.throw(err.json().error || err.statusText || 'Server error'));
  }

}
