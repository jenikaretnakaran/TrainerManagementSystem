import { Component, OnInit } from '@angular/core';
import {TrainerModel} from '../models/trainer.model';
import { TrainerService } from '../trainer.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-trainer-profile',
  templateUrl: './trainer-profile.component.html',
  styleUrls: ['./trainer-profile.component.css']
})

export class TrainerProfileComponent implements OnInit {

  
  constructor(public route:Router,public trainerService:TrainerService,public authService:AuthService) { }
  title:String="Trainer Profile";
  TrainerDetails: TrainerModel[] | any;

  url:any="./assets/images/trainer.jpg";//given for page design
  imageWidth : number =120;
  imageMargin :number =19;
  ngOnInit(): void {
//commented to complete page design and backend
  /* alert(this.authService.checkTrainer());
    if(!this.authService.checkTrainer()){
    this.route.navigate(["/login"]);
    }
    else{
      this.route.navigate(["/profile"])
    }
  */
   // let trainerId =localStorage.getItem("trainerId");
   // let emailId =localStorage.getItem("allocatemail");
   // console.log("emailId=="+emailId);
    //let emailId="test1@gmail.com";
    let trainerId="62d8d7b810e2b01ec2947dfc";
    this.trainerService.getTrainerDetails(trainerId).subscribe((data)=>{
    this.TrainerDetails=JSON.parse(JSON.stringify(data));
console.log(this.TrainerDetails);
    })

  }
  editTrainerDetails()
  {
    
  }
}
