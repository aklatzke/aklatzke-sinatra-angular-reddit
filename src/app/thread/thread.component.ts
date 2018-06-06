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
    permalink: String
  }

  constructor() { }

  ngOnInit() {
    console.log(this.data)
  }

  getThread(permalink){

  }
}
