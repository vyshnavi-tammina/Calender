import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-day-card',
  templateUrl: './day-card.component.html',
  styleUrls: ['./day-card.component.scss']
})
export class DayCardComponent implements OnInit, OnChanges {
  @Input('dayData') dayData: any;
  @Input('title') title;
  @Input('colsCalculation') colsCalculation;
  constructor() { }
  ngOnChanges(changes: SimpleChanges) {
    // for (let propName in changes) {
    /*let chng = changes[propName];
    let cur  = JSON.stringify(chng.currentValue);
    let prev = JSON.stringify(chng.previousValue);
    this.changeLog.push(`propName: currentValue = cur, previousValue = prev`);*/
    // }
    // colsCalculation>1&&colsCalculation<=4?2:colsCalculation<=8?3:colsCalculation<=12?4:1
  }
  ngOnInit() {
  }

}
