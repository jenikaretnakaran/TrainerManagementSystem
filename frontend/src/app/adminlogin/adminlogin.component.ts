import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private route:Router) { }


  loginadmin(){
    alert("LogedIn")
    this.route.navigate(['/admin/dashboard'])
  }


  ngOnInit(): void {
  }

}
