import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-day-card',
  templateUrl: './day-card.component.html',
  styleUrls: ['./day-card.component.scss']
})
export class DayCardComponent implements OnInit {
  @Input('dayData') dayData: any;
  @Input('title') title;
  @Input('colsCalculation') colsCalculation;
  constructor() { }
  ngOnInit() {
  }

}
