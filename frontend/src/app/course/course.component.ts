import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();

  }

}
