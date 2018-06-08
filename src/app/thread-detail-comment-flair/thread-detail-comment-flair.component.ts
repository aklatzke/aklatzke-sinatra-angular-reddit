import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-thread-detail-comment-flair',
  templateUrl: './thread-detail-comment-flair.component.html',
  styleUrls: ['./thread-detail-comment-flair.component.css']
})

export class ThreadDetailCommentFlairComponent implements OnInit {
  @Input() data : string;


  constructor() { }

  ngOnInit() {}
}
