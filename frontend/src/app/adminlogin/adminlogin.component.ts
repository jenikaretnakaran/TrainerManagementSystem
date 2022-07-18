import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  admin={

    email:"",
    password:""

  }

  constructor(private userlogin:LoginService ,private route:Router) { }


  adminlogin(){
    this.userlogin.adminlogin(this.admin).subscribe((data)=>{console.log("Success")})
    this.route.navigate(['/admin'])
  }


  ngOnInit(): void {
  }

}
