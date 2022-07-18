import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainerModel } from './trainer.model';

@Component({
  selector: 'app-trainer-enrollment',
  templateUrl: './trainer-enrollment.component.html',
  styleUrls: ['./trainer-enrollment.component.css']
})
export class TrainerEnrollmentComponent implements OnInit {

  constructor(public route:Router) {   }
 title:string="ENROLLMENT FORM";
  TrainerItem:any =new TrainerModel("","",0,"","","","","","","");
  ngOnInit(): void {
  }
  courses: any = [
    {name:'CERTIFIED XR ASSOCIATE', id:1, selected: true}, 
    {name:'CERTIFIED CYBER SECURITY ANALYST', id:2, selected: false},
    {name:'CERTIFIED SPECIALIST IN FULL STACK DEVELOPMENT', id:3, selected: false},  
    {name:'CERTIFIED SPECIALIST INs DATA SCIENCE & ANALYTICS', id:4, selected: false},
    {name:'MICRO SKILLS TRAINING ON ROBOTIC PROCESS AUTOMATION', id:5, selected: true}, 
    {name:'MICRO SKILLS TRAINING ON DIGITAL MARKETING AND SEO', id:6, selected: false},
    {name:'CERTIFIED SPECIALIST IN MACHINE LEARNING AND ARTIFICIAL INTELLIGENCE', id:7, selected: false},  
    {name:'MOODLE', id:8, selected: false},
    {name:'ARM EMBEDDED SYSTEMS', id:9, selected: true}, 
    {name:'IOT FOR ENGINEERING APPLICATIONS', id:10, selected: false},
    {name:'AWS EDUCATE', id:11, selected: false}  
     ]

  fname="";
  lname="";
  address="";
  email:any=localStorage.getItem('email');
  phno="";
  qual="";
  skill="";
  comp="";
  desgn="";
  course="";
  img:any;
  url:any="./assets/images/trainer.jpg"
  onFileSelected(event:any){
    if(event.target.files){
      var reader=new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload=(e:any)=>{
        this.url=e.target.result;
      }
      this.img=event.target.files[0];
    }
    
  }

  addTrainer()
  {
    this.route.navigate(['waiting']);
  }

  validate()
  {
    alert("submit");
    console.log("subited");
  }
}
