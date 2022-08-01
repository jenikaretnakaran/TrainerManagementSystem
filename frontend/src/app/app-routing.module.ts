import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
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
import { TrainerProfileupdateComponent } from './trainer-profileupdate/trainer-profileupdate.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { ApprovedDataComponent } from './approved-data/approved-data.component';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './admin.guard';

const routes: Routes = [

  {path:"" , component:HomeComponent},
  {path:"signup" , component:SignupComponent},
  {path:"aboutus" , component:AboutComponent},
  
  {path:"login" , component:LoginComponent,
    children:[
      {path:"" , component:TrainerloginComponent},
      {path:"adminlogin" , component:AdminloginComponent}
  ]},

  {path:"admin",canActivate:[AdminGuard],component:AdminComponent,
   children:[
    {path:"",component:AdminDashboardComponent},
    {path:"requests",component:TrainerRequestComponent},
    {path:"approval",component:TrainerApprovalComponent},
    {path:"list",component:TrainersListComponent},
    {path:"allocated-trainers",component:AllocatedlistComponent},
    {path:"allocate",component:AllocateComponent},
    {path:"event",component:CreateEventComponent}
  ]},

  {path:'trainer',canActivate:[AuthGuard],component:TrainerComponent,
   children:[
    {path:'',component:TrainerHomeComponent},
    {path:'enrollment',component:TrainerEnrollmentComponent},
    {path:'confirmation',component:TrainerWaitingComponent},
    {path:'profile',component:TrainerProfileComponent},
    {path:'edit',component:TrainerProfileupdateComponent},
    {path:'schedule',component:ScheduleComponent},
    {path:'approvedata',component:ApprovedDataComponent}
  ]},
    
  ];
                  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }