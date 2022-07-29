import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainerModel } from '../models/trainer.model';
import { TrainerService } from '../trainer.service';


@Component({
  selector: 'app-trainer-enrollment',
  templateUrl: './trainer-enrollment.component.html',
  styleUrls: ['./trainer-enrollment.component.css']
})
export class TrainerEnrollmentComponent implements OnInit {
  //courseselctd: string | undefined;
  //course: Array<{name: string}> = [];
  constructor(public route:Router,public trainerService:TrainerService) {   }
  title:string="ENROLLMENT FORM";
  
  ngOnInit(): void {
  }
  courses=[
   ('Certified Specialist in ML-AI'),
   ('Certified Specialist In FSD (MEAN)'),
   ('Certified Specialist in Software Testing'),
   ('Certified Specialist in Data Science & Analytics'),
   ('Certified Specialist in Robotic Process Automation'),
   ('Certified Cyber Security Analyst'),
   ('Certified Specialist in Digital Marketing'),
   ('Certified Specialist In FSD (MERN)'),
   
  ]
  
  trainerName="";
  address="";
  email:any=localStorage.getItem('email');
  phone="";
  qualification="";
  skill="";
  companyName="";
  designation="";
 course="";
  image:any;
  url:any="./assets/images/trainer.jpg"

  onFileSelected(event:any){
    if(event.target.files){
      var reader=new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload=(e:any)=>{
        this.url=e.target.result;
      }
      this.image=event.target.files[0];
    }
    
  }
 
  
  
  addRequest(){
    var formdata=new FormData();
    formdata.append("image",this.image);
    formdata.append("trainerName",this.trainerName);
    formdata.append("phone",this.phone);
    formdata.append("email",this.email);
    formdata.append("address",this.address);
    formdata.append("qualification",this.qualification);
    formdata.append("skill",this.skill);
    formdata.append("companyName",this.companyName);
    formdata.append("designation",this.designation);
    formdata.append("course",this.course)
    
    
    this.trainerService.enrollTrainer(formdata);
   
    
    this.route.navigate(['/trainer/confirmation'])

  }

  reload()
  {
    window.location.reload();
 
  }


}