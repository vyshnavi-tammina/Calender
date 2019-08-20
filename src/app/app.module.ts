import { MatModulesModule } from './mat-modules.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DayCardComponent } from './day-card/day-card.component';
import { CalenderCardComponent } from './calender-card/calender-card.component';
import { MatCardModule, MatGridListModule, MatInputModule, MatButtonModule, MatBadgeModule, MatDividerModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DayCardComponent,
    CalenderCardComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatButtonModule,
    MatBadgeModule,
    MatDividerModule,
    FormsModule,
    BrowserAnimationsModule,
    MatModulesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
