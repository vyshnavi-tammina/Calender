import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayPersonComponent } from './day-person.component';

describe('DayPersonComponent', () => {
  let component: DayPersonComponent;
  let fixture: ComponentFixture<DayPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
