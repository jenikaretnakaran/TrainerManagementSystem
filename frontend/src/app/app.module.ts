import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainerHomeComponent } from './trainer-home/trainer-home.component';
import { TrainerEnrollmentComponent } from './trainer-enrollment/trainer-enrollment.component';

import { TrainerWaitingComponent } from './trainer-waiting/trainer-waiting.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainerHomeComponent,
    TrainerEnrollmentComponent,
   
    TrainerWaitingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
