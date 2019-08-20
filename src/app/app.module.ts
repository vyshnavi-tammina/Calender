import { MatModulesModule } from './mat-modules.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DayCardComponent } from './day-card/day-card.component';
import { DayPersonComponent } from './day-person/day-person.component';
import { CalenderCardComponent } from './calender-card/calender-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DayCardComponent,
    DayPersonComponent,
    CalenderCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatModulesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
