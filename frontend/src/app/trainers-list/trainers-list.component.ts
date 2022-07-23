import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-trainers-list',
  templateUrl: './trainers-list.component.html',
  styleUrls: ['./trainers-list.component.css']
})
export class TrainersListComponent implements OnInit {

  trainerData=[{
    trainerName:"",
    email:"",
    typeOfEmp:"",
    course:""
  }]
  constructor(private adminservice:AdminService,private router:Router) { }

  ngOnInit(): void 
  {
    this.adminservice.getTrainersList().subscribe((data)=>{
      this.trainerData=JSON.parse(JSON.stringify(data));
    })
  }
  
  allocateRequest(id)
  {
    localStorage.setItem("allocateRequestId",id._id.toString());
    localStorage.setItem('trainerEmail',id.email);
    this.router.navigate(["/admin/allocate"]);
  }


  removeTrainer(trainer){
    this.adminservice.removeTrainer(trainer._id)
    .subscribe((data)=>{
      this.trainerData=this.trainerData.filter(t => t !== trainer)
    })
  }
}
