import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user={
    email:"",
    username:"",
    password:"",
    confpass:"",
    checkbox:false
  }

  constructor(private usersignup:LoginService , private route:Router) { }


  signup(){
      this.usersignup.signup(this.user).subscribe((data)=>{console.log("Success")})
      this.route.navigate(['/login'])
  }


  ngOnInit(): void {
  }

}
