import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private userUrl = "http://localhost:9292/api/user/";
  user;

  constructor(
    private http: HttpClient
  ) { }
 
  getUser (){
    return this.http.get(this.userUrl)
  }  
}
