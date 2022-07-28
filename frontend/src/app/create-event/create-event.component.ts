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
    startDateTime:"",
    endDateTime:""
  }
  startDate;
  endDate;
  bookedStart;
  bookedEnd;
  length;

  startstamp;
  endstamp;
  errorMsg;
  err=false;
  constructor(private adminservice:AdminService,private router:Router) { }

  ngOnInit(): void {
    this.adminservice.getCourses()
    .subscribe((data)=>{
      this.coursedata=JSON.parse(JSON.stringify(data));
      this.courses=this.coursedata.map(({title})=>title);
    })
  }
onCourseSelect(course){
  this.adminservice.selectedCourse(course)
  .subscribe((data)=>{
    this.trainers=JSON.parse(JSON.stringify(data));
    // console.log(this.trainers);
    this.trainerdata=this.trainers.map(({trainerName})=>trainerName)
    // console.log(this.trainerdata);
  })
}
checkDate(){
  this.startstamp = Date.parse(this.startDate)
  this.endstamp= Date.parse(this.endDate);
  // console.log(this.startstamp);
  // console.log(this.endstamp);

//fetching startdate
  this.adminservice.getDate()
  .subscribe((data)=>{
    this.bookedStart=(JSON.parse(JSON.stringify(data))).map(({startDate})=>startDate);
    this.length=this.bookedStart.length;
    // console.log(this.length);
  })

  //fetching enddate
  this.adminservice.getEndDate()
  .subscribe((data)=>{
    this.bookedEnd=(JSON.parse(JSON.stringify(data))).map(({endDate})=>endDate);
  })
  // validatedates
  if(this.startstamp===this.endstamp){
      this.errorMsg="Start date and End date should not be same";
      this.err=true;
  } else if (this.startstamp>this.endstamp){
      this.errorMsg="invalid date and time"
      this.err=true;
  } else if(this.startstamp<this.endstamp){

        for( let len=0;len<this.length;len++)
        {
            if(this.startstamp==this.bookedStart[len]){
              this.errorMsg="slot unavailable1";
              this.err=true;
            }else if (this.bookedStart[len]<this.startstamp<this.bookedEnd[len]){
              this.errorMsg="slot unavailable2";
              this.err=true;
            }else if ((this.endstamp-this.startstamp)<3600000){
              this.errorMsg="minimum 1 hr";
              this.err=true;
            }else {
              console.log(this.startstamp);
              console.log(this.endstamp);
            }
        }
  }   
  // } else if (this.startunixtimestamp==this.bookedStart || this.endunixtimestamp==this.bookedEnd){
  //     this.errorMsg="slot not available"
  //     this.err=true;
  // } else if (this.startunixtimestamp>this.bookedStart || this.startunixtimestamp<this.bookedEnd){
  //     this.errorMsg="slot not available"
  //     this.err=true;
  // } else if((this.endunixtimestamp-this.startunixtimestamp)<3600000){
  //     this.errorMsg="session should be minimum of 1 hour"
  //     this.err=true;
  // } else {
  //    this.err=false;
}

}
