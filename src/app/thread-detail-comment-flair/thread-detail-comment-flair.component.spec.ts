import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadDetailCommentFlairComponent } from './thread-detail-comment-flair.component';

describe('ThreadDetailCommentFlairComponent', () => {
  let component: ThreadDetailCommentFlairComponent;
  let fixture: ComponentFixture<ThreadDetailCommentFlairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreadDetailCommentFlairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadDetailCommentFlairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
