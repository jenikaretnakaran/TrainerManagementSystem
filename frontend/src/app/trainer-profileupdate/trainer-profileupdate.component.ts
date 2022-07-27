import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'app-trainer-profileupdate',
  templateUrl: './trainer-profileupdate.component.html',
  styleUrls: ['./trainer-profileupdate.component.css']
})
export class TrainerProfileupdateComponent implements OnInit {

  isNewImage: boolean = false;
  imageWidth : number =150;
  imageMargin :number =15;

  tempdata = localStorage.getItem("email");

  imagePath = "http://localhost:3000/images/requests"; 


  trainer={

    trainerName:"",
    id:"",
    place:"",
    email:"",
    phone:"",
    address:"",
    skill:"",
    qualification:"",
    companyName:"",
    designation:"",
    course:"",
    image:"",
    typeOfEmp:"",

  }

  Id = localStorage.getItem("token")

  constructor(private trainerservice:TrainerService ,  private route:Router) { }


  ngOnInit(): void {
    this.trainerservice.getTrainerdata(this.Id).subscribe((data)=>{
      this.trainer=JSON.parse(JSON.stringify(data))
    })
  }

  updatedata(){

    this.trainerservice.updatetrainer(this.trainer)
    .subscribe((data)=>{console.log(data)})
    this.route.navigate(["/trainer/profile"])
}

}
