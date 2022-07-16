import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainerHomeComponent } from './trainer-home/trainer-home.component';
import { TrainerEnrollmentComponent } from './trainer-enrollment/trainer-enrollment.component';
import { TrainerComponent } from './trainer/trainer.component';
import { TrainerWaitingComponent } from './trainer-waiting/trainer-waiting.component';
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

@NgModule({
  declarations: [
    AppComponent,
    TrainerHomeComponent,
    TrainerEnrollmentComponent,
    TrainerComponent,
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
    TrainerWaitingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }