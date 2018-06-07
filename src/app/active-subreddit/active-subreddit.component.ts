import { Component, OnInit, Input } from '@angular/core';
import { RedditService } from "../reddit.service";

@Component({
  selector: 'app-active-subreddit',
  templateUrl: './active-subreddit.component.html',
  styleUrls: ['./active-subreddit.component.css']
})

export class ActiveSubredditComponent implements OnInit {
  @Input() activeSub : {
    after: string,
    children : any
  };

  @Input() refresh;
  @Input() refreshActive : () => void;
  @Input() activeSubName: string;
  @Input() isSubscribed: boolean;

  currentAfter : string;

  constructor(
    private redditService: RedditService
  ) { }

  ngOnInit() { 
    this.currentAfter = this.activeSub.after;
  } 

  subscribe(){
    this.redditService.subscribe(this.activeSubName).subscribe(response => this.refresh())
  }

  unsubscribe(){
    this.redditService.unsubscribe(this.activeSubName).subscribe(response => this.refresh())
  }

  loadMore(){
    this.redditService.loadMore(this.activeSubName, this.currentAfter).subscribe(response => {
      let data = JSON.parse(response.toString()).data;
      let newChildren = data.children
      this.currentAfter = data.after;
      this.activeSub.children = this.activeSub.children.concat(newChildren);
    })
  }
}
