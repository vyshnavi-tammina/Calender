import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-calender-card',
  templateUrl: './calender-card.component.html',
  styleUrls: ['./calender-card.component.scss']
})
export class CalenderCardComponent implements OnInit, OnChanges {
  @Input('calenderData') calenderData: any;
  @Input('year') year: any;
  // @Input() set year(value) {
  //   this.year = value;
  //   this.calenderData.map((obj) => {
  //     const date = new Date(obj.birthday);
  //     // console.log('data', date, date.getFullYear(), parseInt(this.year, 10))
  //     if (date.getFullYear() === parseInt(this.year, 10)) {
  //       this.matchedData[date.getDay()].push(obj);
  //     }
  //   });
  // }
  // get year() {
  //   return this.year;
  // }
  array = [0, 1, 2, 3, 4, 5, 6];
  matchedData = { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] };
  days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
  constructor() {

  }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    // for (let propName in changes) {
    //   let chng = changes[propName];
    //   let cur = JSON.stringify(chng.currentValue);
    //   let prev = JSON.stringify(chng.previousValue);
    // }
    console.log('changes', changes);
    this.matchedData = { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] };
    this.calenderData.map((obj) => {
      const date = new Date(obj.birthday);
      // console.log('data', date, date.getFullYear(), parseInt(this.year, 10))
      if (date.getFullYear() === parseInt(this.year, 10)) {
        this.matchedData[date.getDay()].push(obj);
      }
    });
  }

}
