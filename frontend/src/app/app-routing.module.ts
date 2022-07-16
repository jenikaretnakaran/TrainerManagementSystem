import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { TrainerRequestComponent } from './trainer-request/trainer-request.component';
import { TrainerApprovalComponent } from './trainer-approval/trainer-approval.component';
import { TrainersListComponent } from './trainers-list/trainers-list.component';
import { TrainerHomeComponent } from './trainer-home/trainer-home.component';
import { TrainerEnrollmentComponent } from './trainer-enrollment/trainer-enrollment.component';
import { TrainerWaitingComponent } from './trainer-waiting/trainer-waiting.component';

const routes: Routes = [
  {path:"" , component:HomeComponent},
  {path:"admin",component:AdminComponent,
   children:[
    {path:"",component:AdminDashboardComponent},
    {path:"requests",component:TrainerRequestComponent},
    {path:"approval",component:TrainerApprovalComponent},
    {path:"list",component:TrainersListComponent}
  ]},
    {path:"dashboard",component:AdminDashboardComponent},
    {path:'trainer',component:TrainerHomeComponent},
    {path:'enrollment',component:TrainerEnrollmentComponent},
    {path:'waiting',component:TrainerWaitingComponent}
  ];
                  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
