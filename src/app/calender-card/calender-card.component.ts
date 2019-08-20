import { Component, OnInit, Input, OnChanges } from '@angular/core';

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
  colors = [
    '#555d7b',
    '#9fd400',
    '#c97d99',
    '#79cae5',
    '#e84929',
    '#0055d0',
    '#ff32aa',
    '#0eccfe',
    '#ff9b00',
    '#4c694b',
    '#8b2d9b',
    '#607d8b',
    '#555d7b',
    '#9fd400',
    '#c97d99',
    '#ff32aa'
  ];
  colsCalculationData = [0, 0, 0, 0, 0, 0, 0];
  constructor() {
  }

  ngOnInit() {
  }
  ngOnChanges() {
    this.matchedData = { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] };
    this.colsCalculationData = [0, 0, 0, 0, 0, 0, 0];
    this.calenderData.map((obj) => {
      const date = new Date(obj.birthday);
      if (date.getFullYear() === parseInt(this.year, 10)) {
        this.matchedData[date.getDay()].push({
          ...obj,
          // Math.round(Math.random() * ((this.colors.length - 0) + 1)) + 0 // (random colors)
          color: this.colors[this.matchedData[date.getDay()].length % 16]
        });
        if (this.colsCalculationData[date.getDay()]) {
          this.colsCalculationData[date.getDay()]++;
        } else {
          this.colsCalculationData[date.getDay()] = 1;
        }
      }
    });
  }

}
