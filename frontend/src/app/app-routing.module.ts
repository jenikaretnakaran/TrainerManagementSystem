import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainerHomeComponent } from './trainer-home/trainer-home.component';
import { TrainerEnrollmentComponent } from './trainer-enrollment/trainer-enrollment.component';
import { TrainerComponent } from './trainer/trainer.component';
import { TrainerWaitingComponent } from './trainer-waiting/trainer-waiting.component';
const routes: Routes = [
                    {path:'',component:TrainerHomeComponent},
                    {path:'trainer',component:TrainerComponent},
                    {path:'enrollment',component:TrainerEnrollmentComponent},
                    {path:'waiting',component:TrainerWaitingComponent}];
                  /*  children:[
                          {path:' ',component:TrainerHomeComponent},
                          {path:'enrollment',component:TrainerEnrollmentComponent}
                          ]}];*/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
