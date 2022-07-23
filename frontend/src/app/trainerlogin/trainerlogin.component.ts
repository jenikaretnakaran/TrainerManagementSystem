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
    this.login.trainerlogin(this.user).subscribe((res)=>{

      if(res.status){
        localStorage.setItem('token' , res.token)
        localStorage.setItem('email' , res.email)
        this.route.navigate(['/trainer'])
       }else{
        var error = res.data;
        console.log(error);
        alert(error);
       }
    })
  }


  ngOnInit(): void {
  }

}
