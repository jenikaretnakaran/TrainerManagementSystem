import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

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
    time:"",
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
allocateData=[];

  constructor(private adminservice:AdminService,private router:Router) { }

  ngOnInit(): void {
    let allocateId=localStorage.getItem("allocateRequestId");
    this.adminservice.getAllocateRequest(allocateId).subscribe((data)=>{
      this.trainerData=JSON.parse(JSON.stringify(data));
    })

    let email=localStorage.getItem("trainerEmail");
    this.adminservice.dateSchedule(email).subscribe((data)=>{
      this.allocateData=JSON.parse(JSON.stringify(data));
      console.log(this.allocateData);
    })
  }

  allocatedData(){

  }

}
