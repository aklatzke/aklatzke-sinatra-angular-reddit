import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ActiveSubredditComponent } from './active-subreddit/active-subreddit.component';
import { ThreadComponent } from './thread/thread.component';
import { SubredditSearchComponent } from './subreddit-search/subreddit-search.component';
import { ThreadDetailsComponent } from './thread-details/thread-details.component';
import { ThreadDetailCommentComponent } from './thread-detail-comment/thread-detail-comment.component';
import { ThreadMediaComponent } from './thread-media/thread-media.component';
import { TwitterComponent } from './thread-media/twitter/twitter.component';
import { ThreadDetailMoreComponent } from './thread-detail-more/thread-detail-more.component';
import { ThreadDetailCommentFlairComponent } from './thread-detail-comment-flair/thread-detail-comment-flair.component';

@NgModule({
  declarations: [
    AppComponent,
    ActiveSubredditComponent,
    ThreadComponent,
    SubredditSearchComponent,
    ThreadDetailsComponent,
    ThreadDetailCommentComponent,
    ThreadMediaComponent,
    TwitterComponent,
    ThreadDetailMoreComponent,
    ThreadDetailCommentFlairComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
