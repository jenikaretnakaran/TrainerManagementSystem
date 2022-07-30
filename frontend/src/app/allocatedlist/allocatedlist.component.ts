import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-allocatedlist',
  templateUrl: './allocatedlist.component.html',
  styleUrls: ['./allocatedlist.component.css']
})
export class AllocatedlistComponent implements OnInit {
  trainerData=[{
    trainer:"",
    course:"",
    batchId:"",
    name:"",
    startDate:"",
    endDate:"",
    time:"",
    meetingLink:"",
    eStart:"",
    eEnd:"",
    associative:""
    
  }]
  //sDate: any[] = [];
  //eDate: any[] = [];
  constructor(private admin:AdminService) { }

  ngOnInit(): void {
    this.admin.getAllocatedlist().subscribe((data)=>{
      this.trainerData=JSON.parse(JSON.stringify(data));
     
    })
  }

  removeEvent(trainer){
    this.admin.removeEvent(trainer._id)
    .subscribe((data)=>{
      this.trainerData=this.trainerData.filter(t => t !== trainer)
    })
  }
  }

 


  

