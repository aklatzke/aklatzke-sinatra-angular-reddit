import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-thread-media',
  templateUrl: './thread-media.component.html',
  styleUrls: ['./thread-media.component.css']
})

export class ThreadMediaComponent implements OnInit {
  @Input() media : {
    type: string,
    url: string,
    oembed: {
      html: string
    }
  };

  embed : SafeUrl;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    console.log(this.media);
    switch( this.media.type ){
      case "streamable.com":
        this.embed = this.sanitizer.bypassSecurityTrustHtml(
          this.media.oembed.html.replace(`width="600"`, `width="1200"`).replace(`height="338"`, `height="676"`)
        )
      break;

      case "twitter.com":
        this.embed = this.media.url.replace(`mobile.`, '')
      break;
    }
  }
}


