import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  //server_address: string = 'api';
  server_address: string = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  getcourse(){
    return this.http.get((`${this.server_address}/home/course`))
  }

}
