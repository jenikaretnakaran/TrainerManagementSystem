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
   ('CERTIFIED XR ASSOCIATE'),
   ('CERTIFIED CYBER SECURITY ANALYST'),
   ('CERTIFIED SPECIALIST IN FULL STACK DEVELOPMENT'),
   ('CERTIFIED SPECIALIST INs DATA SCIENCE & ANALYTICS'),
   ('MICRO SKILLS TRAINING ON ROBOTIC PROCESS AUTOMATION'),
   ('MICRO SKILLS TRAINING ON DIGITAL MARKETING AND SEO'),
   ('CERTIFIED SPECIALIST IN MACHINE LEARNING AND ARTIFICIAL INTELLIGENCE'),
   ('MOODLE'),
   ('ARM EMBEDDED SYSTEMS'),
   ('IOT FOR ENGINEERING APPLICATIONS'),
   ('AWS EDUCATE')
  ]
  /*courses: any = [
    {name:'CERTIFIED XR ASSOCIATE', id:1, selected:false}, 
    {name:'CERTIFIED CYBER SECURITY ANALYST', id:2, selected:false},
    {name:'CERTIFIED SPECIALIST IN FULL STACK DEVELOPMENT', id:3, selected:false},  
    {name:'CERTIFIED SPECIALIST INs DATA SCIENCE & ANALYTICS', id:4, selected:false},
    {name:'MICRO SKILLS TRAINING ON ROBOTIC PROCESS AUTOMATION', id:5, selected:false}, 
    {name:'MICRO SKILLS TRAINING ON DIGITAL MARKETING AND SEO', id:6, selected:false},
    {name:'CERTIFIED SPECIALIST IN MACHINE LEARNING AND ARTIFICIAL INTELLIGENCE', id:7, selected:false},  
    {name:'MOODLE', id:8},
    {name:'ARM EMBEDDED SYSTEMS', id:9}, 
    {name:'IOT FOR ENGINEERING APPLICATIONS', id:10},
    {name:'AWS EDUCATE', id:11}  
     ]
*/
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
  
  
  /*isChange(value)
  { 
    console.log(value);
         this.course.push({ name: value });
        value = "";
  }*/
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


}