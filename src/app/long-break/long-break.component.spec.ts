import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LongBreakComponent } from './long-break.component';

describe('LongBreakComponent', () => {
  let component: LongBreakComponent;
  let fixture: ComponentFixture<LongBreakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongBreakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongBreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
