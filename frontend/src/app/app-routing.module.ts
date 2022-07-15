import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { TrainerRequestComponent } from './trainer-request/trainer-request.component';
import { TrainerApprovalComponent } from './trainer-approval/trainer-approval.component';
import { TrainersListComponent } from './trainers-list/trainers-list.component';


const routes: Routes = [
  {path:"" , component:HomeComponent},
  {path:"admin",component:AdminComponent,
  children:[
    {path:"",component:AdminDashboardComponent},
    {path:"requests",component:TrainerRequestComponent},
    {path:"approval",component:TrainerApprovalComponent},
    {path:"list",component:TrainersListComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
