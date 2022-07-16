import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TrainerloginComponent } from './trainerlogin/trainerlogin.component'; 
import { TrainerHomeComponent } from './trainer-home/trainer-home.component';
import { TrainerEnrollmentComponent } from './trainer-enrollment/trainer-enrollment.component';
import { TrainerComponent } from './trainer/trainer.component';
import { TrainerWaitingComponent } from './trainer-waiting/trainer-waiting.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [

  {path:"" , component:HomeComponent},
  {path:"signup" , component:SignupComponent},
  {path:"login" , component:LoginComponent,
      children:[
        {path:"" , component:TrainerloginComponent},
        {path:"adminlogin" , component:AdminloginComponent}
  ]},
  {path:"aboutus" , component:AboutComponent},
  {path:"admin",component:AdminComponent,
  children:[
    {path:"dashboard",component:AdminDashboardComponent}
  ]},
  {path:'trainer',component:TrainerHomeComponent},
  {path:'trainerprofile',component:TrainerComponent},
  {path:'enrollment',component:TrainerEnrollmentComponent},
  {path:'waiting',component:TrainerWaitingComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
