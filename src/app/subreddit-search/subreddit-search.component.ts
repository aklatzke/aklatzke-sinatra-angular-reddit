import { Component, OnInit, Input } from '@angular/core';
import { RedditService } from "../reddit.service";

@Component({
  selector: 'app-subreddit-search',
  templateUrl: './subreddit-search.component.html',
  styleUrls: ['./subreddit-search.component.css']
})

export class SubredditSearchComponent implements OnInit {
  @Input() setActive: any

  searchTerm: string;
  searchResults : string[];

  constructor(
    private redditService : RedditService
  ) { }
 
  ngOnInit() {}

  runSearch(){
    let searchResults: object = this.redditService.searchFor(this.searchTerm).subscribe((response) => {
      this.searchResults = JSON.parse(response.toString()).names;
    });
  } 

  closeResults(){
    this.searchResults = null;
  }

  setActiveSub(subName){
    this.setActive(subName)
  }
}
