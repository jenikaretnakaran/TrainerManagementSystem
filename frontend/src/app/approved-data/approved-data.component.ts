import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-approved-data',
  templateUrl: './approved-data.component.html',
  styleUrls: ['./approved-data.component.css']
})
export class ApprovedDataComponent implements OnInit {

  constructor(private adminservice:AdminService,private router:Router) { }

  approvedData=[{
    course:"",
    id:"",
    typeOfEmp:""
  }]
 email;
  ngOnInit(): void {
    this.email=localStorage.getItem('email');
    console.log(this.email);
    this.adminservice.approvedData(this.email).subscribe((data)=>{
      this.approvedData=JSON.parse(JSON.stringify(data));
      console.log(this.approvedData);
    })
  }

}
