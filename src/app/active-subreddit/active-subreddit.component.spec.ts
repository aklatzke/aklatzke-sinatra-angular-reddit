import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveSubredditComponent } from './active-subreddit.component';

describe('ActiveSubredditComponent', () => {
  let component: ActiveSubredditComponent;
  let fixture: ComponentFixture<ActiveSubredditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveSubredditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveSubredditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
