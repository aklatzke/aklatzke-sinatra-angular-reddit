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
  subreddits = [{
    type: String,
    data: {
      display_name: String
    }
  }];
  activeSub;
  activeSubName : String;
  subscribedToActive : boolean = false;
  passableGetSpecificSubreddit : any;
  passableRefresh : any;

  constructor(
    private userService : UserService,
    private redditService : RedditService
  ){}

  ngOnInit(){
    this.getUser()
    this.getSubbredits()

    this.passableGetSpecificSubreddit = this.getSpecificSubreddit.bind(this);
    this.passableRefresh = this.getSubbredits.bind(this);
  }

  getSubbredits() : void {
    this.redditService.getSubbreddits().subscribe((response: Response) => {
      this.subreddits = JSON.parse(response.toString()).data.children.sort((a, b) => {
        return a.data.display_name.toLowerCase() > b.data.display_name.toLowerCase();
      });
    })
  }

  getSpecificSubreddit(name){
    this.activeSubName = name;
    this.activeSub = null;

    this.redditService.getSubredditDefault(name).subscribe((response: Response) => {
      this.activeSub = JSON.parse(response.toString()).data;
      this.subscribedToActive = this.subreddits.some(sub => sub.data.display_name === name);
    })
  }

  getUser() : void {
    this.userService.getUser().subscribe((response: Response) => {
      this.activeUser = response
    })
  }
}
