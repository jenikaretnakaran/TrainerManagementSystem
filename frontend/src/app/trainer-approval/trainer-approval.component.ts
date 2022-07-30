import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { trainerDataModel } from '../models/trainerdata.model';

@Component({
  selector: 'app-trainer-approval',
  templateUrl: './trainer-approval.component.html',
  styleUrls: ['./trainer-approval.component.css']
})
export class TrainerApprovalComponent implements OnInit {

  trainerData=
  {
    trainerName:"",
    email:"",
    phone:"",
    address:"",
    skill:"",
    qualification:"",
    companyName:"",
    designation:"",
    course:"",
    image:"",
    typeOfEmp:""
    
  }

  courses:any=[];
  employment:any=["Internal","Empanelled","Industry Expert"];
  // newList:any;

  constructor(private adminservice:AdminService,private router:Router) { }

  ngOnInit(): void 
  {
    let approveId=localStorage.getItem("approveRequestId");
    this.adminservice.getRequest(approveId).subscribe((data)=>{
      this.trainerData=JSON.parse(JSON.stringify(data));
      // console.log(this.trainerData);
      this.courses=(this.trainerData.course).split(",");
      this.trainerData.course='';
      this.trainerData.typeOfEmp='Internal';  
    })
  }

  getApprove()
  { 
    // this.trainerData.course=this.newList;
    console.log(this.trainerData);
    this.adminservice.getApprove(this.trainerData);
    alert("Trainer Approved");
    this.router.navigate(['/admin']);
  }

}
