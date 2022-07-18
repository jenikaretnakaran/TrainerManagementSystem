import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  constructor(public http:HttpClient) { }

  enrollTrainer(item: any) {
    // console.log("reached add product in product service"+item);
     return this.http.post('http://localhost:3000/insert', { item })
     .subscribe(data => { console.log(data) });
   }
  

   getTrainerDetails(id:any)
   {
    return this.http.get("http://localhost:3000/"+id);
   }

}
