import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { TrainerloginComponent } from './trainerlogin/trainerlogin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { TrainerRequestComponent } from './trainer-request/trainer-request.component';
import { TrainerApprovalComponent } from './trainer-approval/trainer-approval.component';
import { TrainersListComponent } from './trainers-list/trainers-list.component';
import { AllocatedlistComponent } from './allocatedlist/allocatedlist.component';
import { TrainerHomeComponent } from './trainer-home/trainer-home.component';
import { TrainerEnrollmentComponent } from './trainer-enrollment/trainer-enrollment.component';
import { TrainerWaitingComponent } from './trainer-waiting/trainer-waiting.component';
import { TrainerProfileComponent } from './trainer-profile/trainer-profile.component';
import { AllocateComponent } from './allocate/allocate.component';
import { TrainerComponent } from './trainer/trainer.component';

import { AdminService } from './admin.service';
import { AuthService } from './auth.service';
import { TrainerService } from './trainer.service';
import { TrainerProfileupdateComponent } from './trainer-profileupdate/trainer-profileupdate.component';
import { ScheduleComponent } from './schedule/schedule.component';


FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    TrainerHomeComponent,
    TrainerEnrollmentComponent,
    TrainerWaitingComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CourseComponent,
    AboutComponent,
    SignupComponent,
    LoginComponent,
    AdminloginComponent,
    TrainerloginComponent,
    AdminDashboardComponent,
    AdminComponent,
    TrainerRequestComponent,
    TrainerApprovalComponent,
    TrainersListComponent,   
    TrainerWaitingComponent,
    TrainersListComponent,
    TrainerProfileComponent,
    
    TrainerHomeComponent,
    AllocatedlistComponent,
    AllocateComponent,
    TrainerComponent,
    TrainerProfileupdateComponent,
    ScheduleComponent


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    FullCalendarModule
  ],
  providers: [AuthService,TrainerService,AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
