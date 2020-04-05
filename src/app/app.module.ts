import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { MeetingsComponent } from './meetings/meetings.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentsComponent,
    MeetingsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
