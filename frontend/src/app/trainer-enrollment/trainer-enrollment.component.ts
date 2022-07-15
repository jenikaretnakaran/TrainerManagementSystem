import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainer-enrollment',
  templateUrl: './trainer-enrollment.component.html',
  styleUrls: ['./trainer-enrollment.component.css']
})
export class TrainerEnrollmentComponent implements OnInit {

  constructor(public route:Router) { }
  title:string="ENROLLMENT FORM"
  ngOnInit(): void {
  }
  courses=[
    "CERTIFIED XR ASSOCIATE","CERTIFIED CYBER SECURITY ANALYST","CERTIFIED SPECIALIST IN FULL STACK DEVELOPMENT",
    "CERTIFIED SPECIALIST INs DATA SCIENCE & ANALYTICS","MICRO SKILLS TRAINING ON ROBOTIC PROCESS AUTOMATION",
    "MICRO SKILLS TRAINING ON DIGITAL MARKETING AND SEO","CERTIFIED SPECIALIST IN M L AND A I",
    "MOODLE","ARM EMBEDDED SYSTEMS","IOT FOR ENGINEERING APPLICATIONS","AWS EDUCATE"
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
