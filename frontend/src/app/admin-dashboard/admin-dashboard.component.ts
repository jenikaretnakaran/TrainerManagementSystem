import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AuthService } from '../auth.service';
import { trainerDataModel } from '../models/trainerdata.model';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  trainersList:trainerDataModel[]=[];
  constructor(private adminservice:AdminService, private router:Router,private authservice:AuthService) { }
  trainerCount=[];
  ngOnInit(): void 
  {
    // if(!this.authservice.checkAdmin()){
    //   this.router.navigate(["/login"]);
    // }

    this.adminservice.getTrainers().subscribe((trainers)=>{
      this.trainersList=(JSON.parse(JSON.stringify(trainers)));
    })
    this.adminservice.getCount().subscribe((numbers)=>{
      this.trainerCount=JSON.parse(JSON.stringify(numbers));
    })

  }

  searchByName;
  searchBySkill;
  searchByEmp;
  searchByCourse;

//inputchange//

  changeName(event){
    this.searchByName=event.target.value;
  }
  changeSkill(event){
    this.searchBySkill=event.target.value;
  }
  changeEmp(event){
    this.searchByEmp=event.target.value;
  }
  changeCourse(event){
    this.searchByCourse=event.target.value;
  }

//searchresult//

searchName()
{
  this.adminservice.searchByName(this.searchByName).subscribe((search)=>{
    this.trainersList=JSON.parse(JSON.stringify(search));
  })
}
searchSkill()
{
  this.adminservice.searchBySkill(this.searchBySkill).subscribe((search)=>{
    this.trainersList=JSON.parse(JSON.stringify(search))
  })
}
searchEmp()
{
  this.adminservice.searchByEmp(this.searchByEmp).subscribe((search)=>{
    this.trainersList=JSON.parse(JSON.stringify(search))
  })
}
searchCourse()
{
  this.adminservice.searchByCourse(this.searchBySkill).subscribe((search)=>{
    this.trainersList=JSON.parse(JSON.stringify(search))
  })
}

searchReload(event){
  this.adminservice.getTrainers().subscribe((trainers)=>{
    this.trainersList=(JSON.parse(JSON.stringify(trainers)));
  })
}

reloadPage(){
  this.adminservice.getTrainers().subscribe((trainers)=>{
    this.trainersList=(JSON.parse(JSON.stringify(trainers)));
    this.searchByName="";
    this.searchBySkill="";
    this.searchByEmp="";
    this.searchByCourse="";
  
  })

}

directApprove(){
  this.router.navigate(['/admin/allocate'])
}

}
