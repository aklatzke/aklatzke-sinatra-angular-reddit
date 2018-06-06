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
      data: Object[],
      type: String
    }[]
  };

  @Input() activeSubName: String;

  constructor(
    private redditService: RedditService
  ) { }

  ngOnInit() {
    console.log(this.activeSub)
  }
}
