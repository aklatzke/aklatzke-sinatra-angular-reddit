import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RedditService {
  private subredditUrl = "http://localhost:9292/api/subreddits/";
  subreddits;
  activeSubName;

  constructor(
    private http: HttpClient
  ) { }

  getSubbreddits() {
    return this.http.get(this.subredditUrl)
  }

  getSubredditDefault(sub){
    this.activeSubName = sub;

    return this.http.get(this.subredditUrl + `${sub}/hot`)
  }

  getActiveSubName(){
    return this.activeSubName;
  }

  searchFor(name){
    return this.http.get(`${this.subredditUrl}search/${name}`);
  }

  subscribe(name){
    return this.http.get(`${this.subredditUrl}subscribe/${name}`);
  }

  unsubscribe(name){
    return this.http.get(`${this.subredditUrl}unsubscribe/${name}`);
  }
}
