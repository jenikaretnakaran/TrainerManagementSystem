import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allocatedlist',
  templateUrl: './allocatedlist.component.html',
  styleUrls: ['./allocatedlist.component.css']
})
export class AllocatedlistComponent implements OnInit {

  constructor() { }
  trainer=[{
    course:"",
    batch:"",
    name:"",
    duration:"",
    time:"",
    link:""
    
  }]

  ngOnInit(): void {
  }

}
