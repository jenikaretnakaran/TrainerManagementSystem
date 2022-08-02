import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  server_address: string = 'http://localhost:3000';
  constructor(public http:HttpClient) { }

  enrollTrainer(trainerData) {
    
    return this.http.post<any>(`${this.server_address}/trainer/enroll`,trainerData)
        .subscribe(data => { console.log(data) });
   }
  
  
   getTrainerDetails(id:any)
   {
    return this.http.get(`${this.server_address}/trainer/`+id);
   }


   getTrainerdata(id:any) {
    return this.http.get(`${this.server_address}/trainer/trainereditprofile/`+id);
  }

  updatetrainer(data:any){
    return this.http.put(`${this.server_address}/trainer/traineredit`  , data);

  }
  
}
