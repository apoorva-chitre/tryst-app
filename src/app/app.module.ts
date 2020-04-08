import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { HangoutsComponent } from './hangouts/hangouts.component';
import { SimpleStyleDirective } from './simple-style.directive';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentsComponent,
    MeetingsComponent,
    HangoutsComponent,
    SimpleStyleDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
