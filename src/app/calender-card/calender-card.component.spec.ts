import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderCardComponent } from './calender-card.component';

describe('CalenderCardComponent', () => {
  let component: CalenderCardComponent;
  let fixture: ComponentFixture<CalenderCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalenderCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalenderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
