import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubredditSearchComponent } from './subreddit-search.component';

describe('SubredditSearchComponent', () => {
  let component: SubredditSearchComponent;
  let fixture: ComponentFixture<SubredditSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubredditSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubredditSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
