import { Component, OnInit, Input } from '@angular/core';
import { RedditService } from '../reddit.service';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})

export class ThreadComponent implements OnInit {
  @Input() data: {
    title: String,
    permalink: String,
    selftext_html: String,
    id : String,
    subreddit: String,
    num_comments: Number
  }

  textVisible: boolean = false;
  threadVisible: boolean = false;
  passableClose: any;

  constructor() {  }

  ngOnInit() {
    //console.log(this.data);

    this.passableClose = this.closeThread.bind(this);
  }

  closeThread(){
    this.threadVisible = false;
  }

  toggleText(){
    this.textVisible = ! this.textVisible;
  }

  getThread(){
    this.threadVisible = true;
  }
}
