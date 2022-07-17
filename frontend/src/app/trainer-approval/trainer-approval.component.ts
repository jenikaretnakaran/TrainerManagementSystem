import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

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
    qualification:"",
    skillSet:"",
    companyName:"",
    designation:"",
    courseHandle:[],
    image:""
  }
  constructor(private adminservice:AdminService,private router:Router) { }

  ngOnInit(): void 
  {
    let approveId=localStorage.getItem("approveId");
    this.adminservice.getrequest(approveId).subscribe((data)=>{
      this.trainerData=JSON.parse(JSON.stringify(data));
    })
  }

  getApprove()
  {
    this.adminservice.getApprove(this.trainerData);
    alert("Trainer Approved");
    this.router.navigate(['/admin/requests']);
  }

}
