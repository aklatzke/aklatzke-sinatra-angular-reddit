import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-thread-detail-more',
  templateUrl: './thread-detail-more.component.html',
  styleUrls: ['./thread-detail-more.component.css']
})
export class ThreadDetailMoreComponent implements OnInit {
  @Input() loadMore: () => void;
  @Input() data : {
    name: string,
    depth: number,
    count: number,
    parent_id: number,
    id: number
  };

  constructor() { }

  ngOnInit() { }

}
