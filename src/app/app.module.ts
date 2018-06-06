import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ActiveSubredditComponent } from './active-subreddit/active-subreddit.component';
import { ThreadComponent } from './thread/thread.component';
import { SubredditSearchComponent } from './subreddit-search/subreddit-search.component';
import { ThreadDetailsComponent } from './thread-details/thread-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ActiveSubredditComponent,
    ThreadComponent,
    SubredditSearchComponent,
    ThreadDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
