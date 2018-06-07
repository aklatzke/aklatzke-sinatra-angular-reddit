import { Component, OnInit, Input } from '@angular/core';
import { TwitterService } from "../../twitter.service";
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnInit {
  @Input() url : string;

  embed : {
    author_name: string,
    author_url: string,
    cache_age: string,
    height: any,
    html: string,
    provider_name: string,
    provider_url: string,
    type: string,
    url: string,
    version: string,
    width: number
  };

  embedHtml : SafeUrl;

  constructor(
    private twitterService : TwitterService,
    private sanitizer : DomSanitizer
  ) { }

  ngOnInit() {
    this.fetch();
  }

  fetch(){
    this.twitterService.fetchTweet( this.url ).subscribe((data : string) => {
      this.embed = JSON.parse(data);
      this.embedHtml = this.sanitizer.bypassSecurityTrustHtml(this.embed.html)
    })
  }
}
