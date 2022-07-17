import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  getTrainers(){
    return this.http.get("api/getTrainers");
  }

  getCount(){
    return this.http.get("api/getCount");
  }
  searchByName(name){
    return this.http.get("api/nameSearch");
  }
  searchBySkill(skill){
    return this.http.get("api/skillSearch");
  }
  searchByEmp(emp){
    return this.http.get("api/empSearch");
  }
  searchByCourse(course){
    return this.http.get("api/courseSearch");
  }
}
