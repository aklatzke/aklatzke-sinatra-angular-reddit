import { Component, OnInit, Input } from '@angular/core';
import { RedditService } from "../reddit.service";

@Component({
  selector: 'app-thread-detail-comment',
  templateUrl: './thread-detail-comment.component.html',
  styleUrls: ['./thread-detail-comment.component.css']
})
export class ThreadDetailCommentComponent implements OnInit {
  @Input() data : {
    body_html : string,
    depth: number,
    author: string,
    score: number,
    link_id: string,
    replies: {
      data: {
        children: {
          data: object
        }[]
      }
    }
  }

  collapsed : boolean = false;
  passableLoadMore : () => void;
 
  constructor(
    private redditService: RedditService
  ) { }

  ngOnInit() { 
    this.passableLoadMore = this.loadMore.bind(this);
  }

  collapse(){
    this.collapsed = ! this.collapsed;
  }

  loadMore(children){
    this.redditService.loadMoreComments(this.data.link_id, children).subscribe((data : any) => {
      data = JSON.parse(data).json;
      if( data.data ){
        data = data.data.things;
        this.data.replies.data.children.pop()
        this.data.replies.data.children = this.data.replies.data.children.concat(data)
      }
    });
  }
}
