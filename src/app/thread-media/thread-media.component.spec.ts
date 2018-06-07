import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadMediaComponent } from './thread-media.component';

describe('ThreadMediaComponent', () => {
  let component: ThreadMediaComponent;
  let fixture: ComponentFixture<ThreadMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreadMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
