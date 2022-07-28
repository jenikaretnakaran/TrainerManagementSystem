import { Component, OnInit } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  coursedata=[]
  courses;
  course;
  trainers=[];
  trainerdata;
  eventdata={
    trainer:"",
    associative:"",
    tEmail:"",
    aEmail:"",
    startDateTime:"",
    endDateTime:"",
    courseId:"",
    batchId:"",
    meetingLink:"",
    course:"",
    eStart:"",
    eEnd:""
  }
  startDate;
  endDate;
  bookedStart;
  bookedEnd;
  length;

  startstamp;
  endstamp;
  errorMsg;
  err;
  email;

  courseIds=[
    "01_DSA",
    "02_FSD",
    "03_RPA"
  ]

  batchIds=[
    "DSA001",
    "DSA002",
    "FSD001"
  ]
  constructor(private adminservice:AdminService,private router:Router) { }

  ngOnInit(): void {
    this.adminservice.getCourses()
    .subscribe((data)=>{
      this.coursedata=JSON.parse(JSON.stringify(data));
      this.courses=this.coursedata.map(({title})=>title);
    })

    //fetching startdate
  this.adminservice.getDate()
  .subscribe((data)=>{
    this.bookedStart=(JSON.parse(JSON.stringify(data))).map(({startDate})=>startDate);
    this.length=this.bookedStart.length;
  })

   //fetching enddate
   this.adminservice.getEndDate()
   .subscribe((data)=>{
     this.bookedEnd=(JSON.parse(JSON.stringify(data))).map(({endDate})=>endDate);
   })

  }

onCourseSelect(course){
  this.adminservice.selectedCourse(course)
  .subscribe((data)=>{
    this.trainers=JSON.parse(JSON.stringify(data));
    this.trainerdata=this.trainers.map(({trainerName})=>trainerName)
  })
  
}
checkDate(){
  this.startstamp = Date.parse(this.startDate)
  this.endstamp= Date.parse(this.endDate);
  console.log("startstamp"+this.startstamp);
  console.log("endstamp"+this.endstamp);

// validatedates
  if(this.startstamp===this.endstamp)
  {
      this.errorMsg="Start date and End date should not be same";
      this.err=true;
  }
   else if (this.startstamp>this.endstamp)
  {
      this.errorMsg="invalid date and time"
      this.err=true;
  } 
    else if(this.startstamp<this.endstamp){

        for( let len=0;len<this.length;len++)
        {
          
            if(this.startstamp===this.bookedStart[len]){
              this.errorMsg="slot unavailable";
              this.err=true;
            }
            else if (this.startstamp>this.bookedStart[len] && this.startstamp<this.bookedEnd[len]){
              this.errorMsg="slot unavailable";
              this.err=true;
            }
            else if ((this.endstamp-this.startstamp)<3600000){
              this.errorMsg=" session should be minimum of 1 hour";
              this.err=true;
            }
            else {
              this.eventdata.startDateTime=this.startstamp;
              this.eventdata.endDateTime=this.endstamp;
              this.eventdata.eStart=this.startDate;
              this.eventdata.eEnd=this.endDate;
            }
        }

  }   
}
reload(){
  this.startDate="";
  this.endDate="";
  this.err=false;
  this.errorMsg="";
}

onSubmit(){
this.adminservice.allocatedData(this.eventdata)
.subscribe((data)=>{
  console.log(data);
  alert("session created");
  this.router.navigate(['/admin'])
})
}

}
