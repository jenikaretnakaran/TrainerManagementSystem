import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
import { TrainerHomeComponent } from './trainer-home/trainer-home.component';
import { TrainerEnrollmentComponent } from './trainer-enrollment/trainer-enrollment.component';
import { TrainerWaitingComponent } from './trainer-waiting/trainer-waiting.component';
import { ScheduleallocationComponent } from './scheduleallocation/scheduleallocation.component';
import { AllocatedtrainersComponent } from './allocatedtrainers/allocatedtrainers.component';
import { TrainerlistComponent } from './trainerlist/trainerlist.component';
import { AllocateComponent } from './allocate/allocate.component';
import { AllocatedlistComponent } from './allocatedlist/allocatedlist.component';

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
    ScheduleallocationComponent,
    AllocatedtrainersComponent,
    TrainerlistComponent,
    AllocateComponent,
    AllocatedlistComponent,
    

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
