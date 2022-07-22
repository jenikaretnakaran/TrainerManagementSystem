import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'app-trainer-profileupdate',
  templateUrl: './trainer-profileupdate.component.html',
  styleUrls: ['./trainer-profileupdate.component.css']
})
export class TrainerProfileupdateComponent implements OnInit {

  imageWidth : number =110;
  imageMargin :number =15;

  trainer={

    trainerName:"1",
    id:"1",
    place:"1",
    email:"1",
    phone:"1",
    address:"1",
    skill:"1",
    qualification:"1",
    companyName:"1",
    designation:"1",
    course:"1",
    image:"1",
    typeOfEmp:"1"

  }

  constructor(private trainerservice:TrainerService,  private route:Router) { }

  ngOnInit(): void {
    let trainerId = localStorage.getItem("trainerid")
    this.trainerservice.getTrainerdata(trainerId).subscribe((data)=>{
      this.trainer=JSON.parse(JSON.stringify(data))
    })
  }

  updatedata(){

    this.trainerservice.updatetrainer(this.trainer)
    .subscribe((data)=>{console.log(data)})
    this.route.navigate(["/trainer/profile"])
}

}
