import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  checkAdmin()
  {
    return !!localStorage.getItem('admindata');
  }

  checkTrainer()
  {
    return !!localStorage.getItem('trainerdata');
  }
}
