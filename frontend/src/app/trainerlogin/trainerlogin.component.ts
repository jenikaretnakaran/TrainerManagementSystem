import { Component, OnInit } from '@angular/core';

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

  loginuser(){
    alert("LogedIn")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
