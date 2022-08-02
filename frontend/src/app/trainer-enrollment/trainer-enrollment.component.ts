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

  constructor(public route:Router,public trainerService:TrainerService) {   }
  title:string="ENROLLMENT FORM";
  TrainerItem:any =new TrainerModel("","",0,"","","","","","","");
  ngOnInit(): void {
  }
  courses: any = [
    {name:'CERTIFIED XR ASSOCIATE', id:1}, 
    {name:'CERTIFIED CYBER SECURITY ANALYST', id:2},
    {name:'CERTIFIED SPECIALIST IN FULL STACK DEVELOPMENT', id:3},  
    {name:'CERTIFIED SPECIALIST INs DATA SCIENCE & ANALYTICS', id:4},
    {name:'MICRO SKILLS TRAINING ON ROBOTIC PROCESS AUTOMATION', id:5}, 
    {name:'MICRO SKILLS TRAINING ON DIGITAL MARKETING AND SEO', id:6},
    {name:'CERTIFIED SPECIALIST IN MACHINE LEARNING AND ARTIFICIAL INTELLIGENCE', id:7},  
    {name:'MOODLE', id:8},
    {name:'ARM EMBEDDED SYSTEMS', id:9}, 
    {name:'IOT FOR ENGINEERING APPLICATIONS', id:10},
    {name:'AWS EDUCATE', id:11}  
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
  course=[];
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
  get selectedOptions() {
    return this.courses
        .filter(opt => opt['checked'])
        .map(opt => opt.Id);
}

  addTrainer()
  {
    
    this.trainerService.enrollTrainer(this.TrainerItem);
    // alert("You are Enrolled");
    let Email=this.email
    this.route.navigate(['trainer/confirmation']);
    localStorage.setItem('enrolled',Email);

   
  }
  /*
  get selectedOptions() {
    return this.orderService.order.Products
        .filter(opt => opt['checked'])
        .map(opt => opt.Id);
}
 */
}
