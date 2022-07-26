import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

interface employment {
  value: string;
  viewValue: string;
}

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

  path= "http://localhost:3000/images/requests";

  emp: employment[]=[
    {value:"internal", viewValue:"Internal"},
    {value:"empanelled", viewValue:"Empanelled"},
    {value:"industryexpert", viewValue:"IndustryExpert"}
  ];

  courses:any=[];

  constructor(private adminservice:AdminService,private router:Router) { }

  ngOnInit(): void 
  {
    let approveId=localStorage.getItem("approveRequestId");
    this.adminservice.getRequest(approveId).subscribe((data)=>{
      this.trainerData=JSON.parse(JSON.stringify(data));
      this.courses=(this.trainerData.course).split(",");
      console.log(this.courses);
    })
  }

  getApprove()
  {
    this.adminservice.getApprove(this.trainerData);
    alert("Trainer Approved");
    this.router.navigate(['/admin']);
  }

}
