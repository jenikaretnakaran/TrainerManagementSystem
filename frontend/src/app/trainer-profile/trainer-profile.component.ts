import { Component, OnInit } from '@angular/core';
import {TrainerModel} from '../trainer-enrollment/trainer.model';
@Component({
  selector: 'app-trainer-profile',
  templateUrl: './trainer-profile.component.html',
  styleUrls: ['./trainer-profile.component.css']
})
export class TrainerProfileComponent implements OnInit {
  title:String="Trainer Profile";
  TrainerDetails: TrainerModel[] | any;

  url:any="./assets/images/trainer.jpg";//given for page design
  imageWidth : number =120;
  imageMargin :number =19;
  constructor() { }

  ngOnInit(): void {
  }

}
