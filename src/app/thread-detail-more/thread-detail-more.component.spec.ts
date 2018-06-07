import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadDetailMoreComponent } from './thread-detail-more.component';

describe('ThreadDetailMoreComponent', () => {
  let component: ThreadDetailMoreComponent;
  let fixture: ComponentFixture<ThreadDetailMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreadDetailMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadDetailMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
