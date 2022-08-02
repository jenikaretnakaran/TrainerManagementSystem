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
 // url:any="./assets/images/trainer.jpg";
  isNewImage: boolean;
  local: any;
 // trainerData:any;
  mypic="";
  emailId="";
  courseHandling=[];

Id = localStorage.getItem("token");
imageWidth : number =150;
imageMargin :number =15;
//imageWidth : number =180;
//imageMargin :number =25;
trainerData={
  trainerName:"",
  id:"",
  phone:"",
  email:"",
  address:"",
  skill:"",
  qualification:"",
  companyName:"",
  designation:"",
  course:"",
  image:"",
  typeOfEmp:"",
  about:"",

}

  constructor(public route:Router,public trainerService:TrainerService,public authService:AuthService) 
  { 
   
    this.imagePath = environment.imagePath;
    this.isNewImage = false;
  
   // console.log("image path==="+this.imagePath);
  }
  title:string="PROFILE";
  ngOnInit(): void {
 

 let token = localStorage.getItem("token")
    this.trainerService.getTrainerdata(token)
         .subscribe((data) => {
        this.trainerData =JSON.parse(JSON.stringify(data))
       
      })
   
    }

    editProfile()
    {
      this.route.navigate(['/trainer/edit'])
    }  
  
  

}

