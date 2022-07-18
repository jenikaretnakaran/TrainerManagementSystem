import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-trainer-request',
  templateUrl: './trainer-request.component.html',
  styleUrls: ['./trainer-request.component.css']
})
export class TrainerRequestComponent implements OnInit {

  trainerData=
  [{
    trainerName:"",
    qualification:"",
    companyName:"",
    designation:"",
    skillSet:""
  }]
  constructor(private adminservice:AdminService,private router:Router) { }

  ngOnInit(): void 
  {
    this.adminservice.getTrainerRequest().subscribe((data)=>{
      this.trainerData=JSON.parse(JSON.stringify(data));
    })
  }

  rejectTrainer(id)
  {
    this.adminservice.rejectTrainer(id._id)
    .subscribe((data)=>{
      this.trainerData=this.trainerData.filter(trainer=>trainer !== id)
    })
  }
  approveRequest(id)
  {
    localStorage.setItem("approveRequestId",id._id.toString());
    this.router.navigate(["/admin/approval"]);
  }
}
 
