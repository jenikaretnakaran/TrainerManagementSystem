import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { HomeService } from '../home.service';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses=[{
    title:"",
    description:"",
    image:"",
  }]

  constructor(private home:HomeService) { }

  ngOnInit(): void {
    AOS.init();

    this.home.getcourse()
    .subscribe((data)=>{
    this.courses=JSON.parse(JSON.stringify(data))
    })
  }



  }

 
