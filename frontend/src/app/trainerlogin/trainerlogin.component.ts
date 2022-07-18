import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

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
  constructor(private login:LoginService ,private route:Router) { }

  loginuser(){
    this.login.trainerlogin(this.user).subscribe((data)=>{console.log("Success")})
    this.route.navigate(['/trainer'])

  }


  ngOnInit(): void {
  }

}
