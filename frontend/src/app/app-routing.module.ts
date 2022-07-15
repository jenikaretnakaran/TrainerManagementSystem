import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TrainerloginComponent } from './trainerlogin/trainerlogin.component';

const routes: Routes = [
  {path:"" , component:HomeComponent},
  {path:"signup" , component:SignupComponent},
  {path:"login" , component:LoginComponent,
      children:[
        {path:"" , component:TrainerloginComponent},
        {path:"adminlogin" , component:AdminloginComponent}
      ]
  },
  {path:"aboutus" , component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
