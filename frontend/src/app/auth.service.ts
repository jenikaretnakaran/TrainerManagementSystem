import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  server_address: string = 'http://localhost:3000';


  constructor(public http:HttpClient) { }

  checkTrainer()
  {
    return !!localStorage.getItem('trainerdata');
  }
  // checkAdmin()
  // {
  //   return !!localStorage.getItem('admindata');
  // }
    
  verifieduser(id:any){
    return this.http.post(`${this.server_address}/trainer/checkverified`,{id:id}).subscribe((data)=>{
     sessionStorage.setItem('verified','true');
    });

  }

  rejecteduser(id:any){
    return this.http.post(`${this.server_address}/trainer/rejected`,{id:id}).subscribe((data)=>{
      sessionStorage.setItem('rejected','true');
     });
  }

  rejected(){
    return !!sessionStorage.getItem('rejected');
  }

  userverified(){
    return !!sessionStorage.getItem('verified');
  }

  getToken(){
    return localStorage.getItem("token")
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  adminloggedIn(){
    return !!localStorage.getItem("tokens")
  }

  gettokens(){
    return localStorage.getItem("tokens")

  }


}
