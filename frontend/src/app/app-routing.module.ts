import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainerHomeComponent } from './trainer-home/trainer-home.component';
import { TrainerEnrollmentComponent } from './trainer-enrollment/trainer-enrollment.component';
import { TrainerComponent } from './trainer/trainer.component';
import { TrainerWaitingComponent } from './trainer-waiting/trainer-waiting.component';

import { HomeComponent } from './home/home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [
  {path:"" , component:HomeComponent},
  {path:"",component:HeaderComponent},
  {path:"",component:FooterComponent},
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
