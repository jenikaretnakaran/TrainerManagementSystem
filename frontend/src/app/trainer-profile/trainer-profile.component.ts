import { Component, OnInit } from '@angular/core';
import {TrainerModel} from '../models/trainer.model';
import { TrainerService } from '../trainer.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-trainer-profile',
  templateUrl: './trainer-profile.component.html',
  styleUrls: ['./trainer-profile.component.css']
})

export class TrainerProfileComponent implements OnInit {
  
  
  token: any;
  imagePath: string;
  isEditProfile: boolean = false;
  editProfileForm: any;
  url:any="./assets/images/trainer.jpg";
  isNewImage: boolean;
  local: any;
  trainerData:any;
  mypic="";
  emailId="";
  /*
  {
  trainerName:"",
  email:"",
  phone:"",
  address:"",
  skill:"",
  qualification:"",
  companyName:"",
  designation:"",
  course:"",
  image:"",
  typeOfEmp:""
  
}*/
  constructor(public route:Router,public trainerService:TrainerService,public authService:AuthService) 
  { 
   
    this.imagePath = environment.imagePath;
    this.isNewImage = false;
  
    console.log("image path==="+this.imagePath);
  }
  title:string="PROFILE";
  ngOnInit(): void {
  //  this.token = this.gettoken.getToken();
  
  let id=localStorage.getItem('id');
 // let emailId="testuser@gmail.com";
    this.trainerService.getTrainerDetails(id)
         .subscribe((data) => {
        this.trainerData =data;
      })// data;
       // alert(emailId)
       // console.log("in ts--"+this.trainer);
    }

  
  
  

}

