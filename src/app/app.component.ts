import { Component } from '@angular/core';
import { UserService } from './user.service';
import { RedditService } from "./reddit.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  activeUser = null;
  subreddits = [];
  activeSub;
  activeSubName;

  constructor(
    private userService : UserService,
    private redditService : RedditService
  ){}

  ngOnInit(){
    this.getUser()
    this.getSubbredits()
  }

  getSubbredits() : void {
    this.redditService.getSubbreddits().subscribe((response: Response) => {
      this.subreddits = JSON.parse(response.toString()).data.children;
    })
  }

  getSpecificSubreddit(name){
    this.activeSubName = name;
    this.activeSub = null;

    this.redditService.getSubredditDefault(name).subscribe((response: Response) => {
      this.activeSub = JSON.parse(response.toString()).data;
    })
  }

  getUser() : void {
    this.userService.getUser().subscribe((response: Response) => {
      this.activeUser = response
    })
  }
}
