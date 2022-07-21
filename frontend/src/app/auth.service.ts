import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http:HttpClient) { }

  checkTrainer()
  {
    return !!localStorage.getItem('trainerdata');
  }
  // checkAdmin()
  // {
  //   return !!localStorage.getItem('admindata');
  // }
}
