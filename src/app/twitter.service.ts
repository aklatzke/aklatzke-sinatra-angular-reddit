import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TwitterService {
  baseUrl: string = "/twitter/"

  constructor(
    private http: HttpClient
  ) { }

  fetchTweet(url){
    return this.http.get(`${this.baseUrl}?url=${url}`);
  }
}
