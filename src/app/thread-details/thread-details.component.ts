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
    title : string,
    num_comments: number,
    selftext_html: string,
    permalink: string,
    media: object,
    url: string
  };

  comments: [{
    data : Object[]
  }];

  collapsed : boolean = false;

  constructor(
    private redditService : RedditService
  ) { }

  redirect(link){
    window.open(link);
  }

  refreshFeed(){
    this.load();
  }

  toggleText(){
    this.collapsed = ! this.collapsed;
  }

  load(){
    this.redditService.getThreadDetails(this.sub, this.id).subscribe(response => {
      this.fullData = JSON.parse(response.toString());

      this.threadDetails = this.fullData[0].data.children[0].data;
      
      if( this.threadDetails.url.includes("twitter.com") ){
        this.threadDetails.media = {
          type: "twitter.com",
          url: this.threadDetails.url
        }
      }
      console.log(this.threadDetails);
      this.comments = this.fullData[1].data.children;
    })
  }

  ngOnInit() {
    this.load();
  }
}
