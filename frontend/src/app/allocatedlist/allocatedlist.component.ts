import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allocatedlist',
  templateUrl: './allocatedlist.component.html',
  styleUrls: ['./allocatedlist.component.css']
})
export class AllocatedlistComponent implements OnInit {

  trainer=[{
    course:"",
    batch:"",
    name:"",
    duration:"",
    time:"",
    link:""
    
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
