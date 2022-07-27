import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
// import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-allocate',
  templateUrl: './allocate.component.html',
  styleUrls: ['./allocate.component.css']
})
export class AllocateComponent implements OnInit {

  trainerData=
  {
    trainerName:"",
    email:"",
    phone:"",
    skill:"",
    qualification:"",
    companyName:"",
    designation:"",
    course:"",
    image:"",
    typeOfEmp:"",
    startDate:"",
    endDate:"",
    fromTime:"",
    toTime:"",
    courseId:"",
    batchId:"",
    meetingLink:""
  };

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
// time={
//   date: new Date(),
//   fromTime:"08:00",
//   toTime:"10:00"
// }
// errorMsg:any;
// err:any;
// message:any
// date=new Date();
// newTime=new Date();
// currenthh = this.newTime.getHours();
// currentmm = this.newTime.getMinutes();
// fromhh:any;
// frommm:any;
// tohh:any;
// tomm:any;
// currentyear:any=this.date.getFullYear();
// currentmonth:any=this.date.getMonth();
// currentdate:any=this.date.getDate();


// maxTime="21:00:00"
allocatedData:any=[];
allocatingData;


  constructor(private adminservice:AdminService,private router:Router) { }

  ngOnInit(): void {
     
   
    let allocateId=localStorage.getItem("allocateRequestId");
    this.adminservice.getAllocateRequest(allocateId).subscribe((data)=>{
      this.trainerData=JSON.parse(JSON.stringify(data));
    })

    let email=localStorage.getItem("trainerEmail");
    this.adminservice.dateSchedule(email).subscribe((data)=>{
    this.allocatedData=JSON.parse(JSON.stringify(data));
      console.log(this.allocatedData); 

    })
   
    
  }
  // timeCheck(){
  //   this.err=false;
  //   this.errorMsg=null;
  //   this.message=null;

  //   this.fromhh=this.time.fromTime.split(":")[0];
  //   this.fromhh=parseInt(this.fromhh);
  //   this.frommm=this.time.fromTime.split(":")[1];
  //   this.frommm=parseInt(this.frommm);

  //   this.tohh=this.time.toTime.split(":")[0];
  //   this.tohh=parseInt(this.tohh);
  //   this.tomm=this.time.toTime.split(":")[1];
  //   this.tomm=parseInt(this.tomm);

  //   if(this.tohh<this.fromhh)
  //   {
  //     this.errorMsg="time range is invalid"
  //   }
  //   else if((this.fromhh==this.tohh) && (this.tomm-this.frommm)<30)
  //   {
  //     this.errorMsg="time slot should be minimum of 30 minutes"
  //   }
  //   else if(this.fromhh<this.currenthh)
  //   {
  //     this.errorMsg="invalid time";
  //   }
  //   else if((this.fromhh==this.currenthh<this.currentmm))
  //   {
  //     this.errorMsg="invalid time";
  //   }
  //   else 
  //   {
  //     this.adminservice.checkslot(this.time)
  //     .subscribe((res)=>{
  //       if(!res){
  //         this.err=true;
  //         this.message=null;
  //       }
  //       else{
  //         this.message=res;
  //         this.err=false;
  //       }
  //     })
  //   }
  // }

  allocateData(){

  }

}
