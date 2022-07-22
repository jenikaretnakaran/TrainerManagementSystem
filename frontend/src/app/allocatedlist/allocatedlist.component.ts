import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-allocatedlist',
  templateUrl: './allocatedlist.component.html',
  styleUrls: ['./allocatedlist.component.css']
})
export class AllocatedlistComponent implements OnInit {

  trainer=[{
    trainerName:"",
    course:"",
    batchId:"",
    name:"",
    startDate:"",
    endDate:"",
    time:"",
    meetingLink:""
    
  }]

  constructor(private admin:AdminService) { }

  ngOnInit(): void {
    this.admin.getAllocatedlist().subscribe((data)=>{
      this.trainer=JSON.parse(JSON.stringify(data));
    })
  }

}
