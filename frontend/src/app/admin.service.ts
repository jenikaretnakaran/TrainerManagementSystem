import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { AnyARecord } from 'dns';

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
    return this.http.post("http://localhost:3000/api/approvedTrainer",trainer)
    .subscribe((data)=>{console.log(data)});
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
  return this.http.delete("http://localhost:3000/api/removeTrainer/"+id)
 }

 //AllocatedList
 getAllocatedlist(){
  return this.http.get("http://localhost:3000/api/allocatedlist");
}
//allocate
getAllocateRequest(id){
 return this.http.get("http://localhost:3000/api/allocationData/"+id)
}

dateSchedule(email){
  return this.http.get("http://localhost:3000/api/dateSchedule/"+email);
}

getCourses(){
  return this.http.get("http://localhost:3000/api/getCourses");
}
selectedCourse(course){
  return this.http.get("http://localhost:3000/api/selectedCourse/"+course);
}
getDate(){
  return this.http.get("http://localhost:3000/api/getDate")
}
getEndDate(){
  return this.http.get("http://localhost:3000/api/getEndDate")
}

allocatedData(data){
  return this.http.post("http://localhost:3000/api/allocated",data)
}

//delete an event
removeEvent(id){
  return this.http.delete("http://localhost:3000/api/removeEvent/"+id)
 }

//approved data to trainer
approvedData(email){
  return this.http.get("http://localhost:3000/api/approvedData/"+email);
}
}


