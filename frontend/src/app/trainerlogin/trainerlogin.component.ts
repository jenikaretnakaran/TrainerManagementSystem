import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainerlogin',
  templateUrl: './trainerlogin.component.html',
  styleUrls: ['./trainerlogin.component.css']
})
export class TrainerloginComponent implements OnInit {

  user={

    email:"",
    password:""

  }
  constructor(private route:Router) { }

  loginuser(){
    alert("LogedIn")
    this.route.navigate(["/trainer"])

  }


  ngOnInit(): void {
  }

}
