import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-calender-card',
  templateUrl: './calender-card.component.html',
  styleUrls: ['./calender-card.component.scss']
})
export class CalenderCardComponent implements OnInit, OnChanges {
  @Input('calenderData') calenderData: any;
  @Input('year') year: any;
  array = [0, 1, 2, 3, 4, 5, 6];
  matchedData = { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] };
  days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
  colsCalculationData = [0, 0, 0, 0, 0, 0, 0];
  constructor() {

  }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    this.matchedData = { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] };
    this.colsCalculationData = [0, 0, 0, 0, 0, 0, 0];
    this.calenderData.map((obj) => {
      const date = new Date(obj.birthday);
      if (date.getFullYear() === parseInt(this.year, 10)) {
        this.matchedData[date.getDay()].push(obj);
        if (this.colsCalculationData[date.getDay()]) {
          this.colsCalculationData[date.getDay()]++;
        } else {
          this.colsCalculationData[date.getDay()] = 1;
        }
      }
    });
  }

}
