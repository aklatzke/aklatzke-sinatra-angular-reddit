import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadDetailCommentComponent } from './thread-detail-comment.component';

describe('ThreadDetailCommentComponent', () => {
  let component: ThreadDetailCommentComponent;
  let fixture: ComponentFixture<ThreadDetailCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreadDetailCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadDetailCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
