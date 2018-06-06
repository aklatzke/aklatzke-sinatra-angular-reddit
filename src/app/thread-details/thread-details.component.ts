import { Component, OnInit, Input } from '@angular/core';
import { RedditService } from "../reddit.service";
@Component({
  selector: 'app-thread-details',
  templateUrl: './thread-details.component.html',
  styleUrls: ['./thread-details.component.css']
})
export class ThreadDetailsComponent implements OnInit {
  @Input() id : String;
  @Input() sub : String;
  @Input() close : () => void;

  private fullData : Object;
  threadDetails: {
    title : String,
    num_comments: Number,
    selftext_html: String
  };
  comments: Object[];

  constructor(
    private redditService : RedditService
  ) { }

  ngOnInit() {
    this.redditService.getThreadDetails(this.sub, this.id).subscribe(response => {
      this.fullData = JSON.parse(response.toString());

      this.threadDetails = this.fullData[0].data.children[0].data;

      console.log(this.threadDetails);
      this.comments = this.fullData[1].data.children;
    })
  }
}
