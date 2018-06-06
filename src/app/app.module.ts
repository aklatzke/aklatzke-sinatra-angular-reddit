import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ActiveSubredditComponent } from './active-subreddit/active-subreddit.component';
import { ThreadComponent } from './thread/thread.component';

@NgModule({
  declarations: [
    AppComponent,
    ActiveSubredditComponent,
    ThreadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
