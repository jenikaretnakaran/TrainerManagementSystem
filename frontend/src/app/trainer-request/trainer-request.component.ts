import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { trainerDataModel } from '../models/trainerdata.model';

@Component({
  selector: 'app-trainer-request',
  templateUrl: './trainer-request.component.html',
  styleUrls: ['./trainer-request.component.css']
})
export class TrainerRequestComponent implements OnInit {
  trainerData=
  [{
    trainerName:String,
    email:String,
    phone:String,
    address:String,
    skill:String,
    qualification:String,
    companyName:String,
    designation:String,
    course:String,
    image:String
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
    .subscribe((trainer)=>{
      this.trainerData=this.trainerData.filter(p => p !== id);
    })
  }
  approveRequest(id)
  {
    localStorage.setItem("approveRequestId",id._id.toString());
    this.router.navigate(["/admin/approval"]);
  }
}
 
