import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //server_address: string = 'api';
  server_address: string = 'http://localhost:3000';

  constructor(private http:HttpClient) { }


  signup(data){
   return this.http.post(`${this.server_address}/signup`, {data:data})
  }

  adminlogin(data){
    return this.http.post(`${this.server_address}/adminlogin`, {data:data})
  }

  trainerlogin(data){
    return this.http.post(`${this.server_address}/trainerlogin`, {data:data})
  }



}
