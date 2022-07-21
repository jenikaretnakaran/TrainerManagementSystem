import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public http:HttpClient) { }

  //dashboardComponent
  

  getTrainers(){
    return this.http.get("http://localhost:3000/api/getTrainers");
  }

  getCount(){
    return this.http.get("http://localhost:3000/api/getCount");
  }
  searchByName(name){
    return this.http.get("http://localhost:3000/api/nameSearch/"+name);
  }
  searchBySkill(skill){
    return this.http.get("http://localhost:3000/api/skillSearch/"+skill);
  }
  searchByEmp(emp){
    return this.http.get("http://localhost:3000/api/empSearch/"+emp);
  }
  searchByCourse(course){
    return this.http.get("http://localhost:3000/api/courseSearch/"+course);
  }

  //trainerApproval
  getRequest(id){
    return this.http.get("http://localhost:3000/api/approveRequest/"+id);
  }
  getApprove(trainer){
    return this.http.post("http://localhost:3000/api/approvedTrainer",trainer);
  }

  //trainerRequest
  getTrainerRequest(){
    return this.http.get("http://localhost:3000/api/request");
  }
  rejectTrainer(id){
   return this.http.delete("http://localhost:3000/api/reject/"+id) ;
  }

  //trainersList
 getTrainersList(){
   return this.http.get("http://localhost:3000/api/getTrainersList");
 }
 removeTrainer(id){
  return this.http.delete("http://localhost:3000/api/removeTrainer"+id)
 }
}


