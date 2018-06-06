import { Component, OnInit, Input } from '@angular/core';
import { RedditService } from "../reddit.service";

@Component({
  selector: 'app-active-subreddit',
  templateUrl: './active-subreddit.component.html',
  styleUrls: ['./active-subreddit.component.css']
})

export class ActiveSubredditComponent implements OnInit {
  @Input() activeSub : {
    children : {
      data: object[],
      type: string
    }[]
  };

  @Input() refresh;
  @Input() activeSubName: string;
  @Input() isSubscribed: boolean;

  constructor(
    private redditService: RedditService
  ) { }

  ngOnInit() {
    console.log(this.activeSub)
  }

  subscribe(){
    this.redditService.subscribe(this.activeSubName).subscribe(response => this.refresh())
  }

  unsubscribe(){
    this.redditService.unsubscribe(this.activeSubName).subscribe(response => this.refresh())
  }
}
