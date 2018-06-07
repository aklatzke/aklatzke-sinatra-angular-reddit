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

  getThreadDetails(sub, id){
    return this.http.get(`${this.subredditUrl}specific/${sub}/${id}`);
  }

  getFrontPage(){
    return this.http.get(`${this.subredditUrl}front`);
  }

  loadMore(sub, page){
    return this.http.get(`${this.subredditUrl}load/${sub}/${page}`);
  }

  loadMoreComments(linkId, children){
    return this.http.get(`${this.subredditUrl}comments/${linkId}?children=${children.join(",")}`);
  }
}
