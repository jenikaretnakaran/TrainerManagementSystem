import { Component, OnInit } from '@angular/core';
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

  startunixtimestamp;
  endunixtimestamp;
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
    console.log(this.trainers);
    this.trainerdata=this.trainers.map(({trainerName})=>trainerName)
    console.log(this.trainerdata);
  })
}
getdata(value){
  console.log(value);
}

checkDate(){
  this.startunixtimestamp = Date.parse(this.startDate)
  this.endunixtimestamp= Date.parse(this.endDate);
  // validatedates
  if(this.startunixtimestamp===this.endunixtimestamp){
      this.errorMsg="Start date and End date should not be same";
      this.err=true;
  } else if (this.startunixtimestamp>this.endunixtimestamp){
      this.errorMsg="invalid date and time"
      this.err=true;
  }
}

}
