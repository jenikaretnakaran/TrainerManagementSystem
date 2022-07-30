import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; 
import { TrainerService } from '../trainer.service';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  trainerdata:any={
    batchId:"",
    course:"",
    eStart:"",
    eEnd:"",
    starttime:"",
    endtime:"",
    meetingLink:""
  }


  eventss:any=[];

  constructor(private trainerservice:TrainerService) { }



  ngOnInit(): void {

    let token = localStorage.getItem("token")
    this.trainerservice.scheduledata(token)
    .subscribe((data)=>{
    this.trainerdata=JSON.parse(JSON.stringify(data))
  })

  this.trainerservice.scheduledata(token)
    .subscribe((data:any)=>{
      this.eventss = data.map((e: any) => ({ title: e.batchId, start: e.eStart , end: e.eEnd , url: e.meetingLink}))
      console.log(this.eventss)
  })

    
  }


  calendarOptions: CalendarOptions = {
  initialView: 'dayGridMonth',
  dateClick: this.handleDateClick.bind(this), 
  events:this.eventss
   
  };

  handleDateClick(arg) {
    alert(arg.dateStr)
  }


  }
