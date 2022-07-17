import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  //dashboardComponent

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

  //trainerApproval
  getrequest(id){
    return this.http.get("api/approveRequest"+id);
  }
  getApprove(trainer){
    return this.http.post("api/approvedTrainer",trainer);
  }
}
