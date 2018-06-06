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
    selftext_html: String
  }

  textVisible: boolean = false;
  threadVisible: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleText(){
    this.textVisible = ! this.textVisible;
  }

  getThread(permalink){

  }
}
