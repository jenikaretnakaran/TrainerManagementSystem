import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; 
import { TrainerService } from '../trainer.service';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  trainerdata:any=[{
    batchId:"",
    course:"",
    eStart:"",
    eEnd:"",
    starttime:"",
    endtime:"",
    meetingLink:""
  }]


  eventss:any=[];

  constructor(private trainerservice:TrainerService) {}



  ngOnInit(): void {


    //table data
    let token = localStorage.getItem("token")
    this.trainerservice.scheduledata(token)
    .subscribe((data)=>{
    this.trainerdata=JSON.parse(JSON.stringify(data))
  })

  //calender data
  this.trainerservice.scheduledata(token)
    .subscribe((data:any)=>{
      this.eventss = data.map((e: any) => ({ title: e.batchId, start: e.eStart , url: e.meetingLink , color:"red" }))
      console.log(this.eventss)
      this.calendarOptions.events=this.eventss;

  })


  }
  //Calender starting


  calendarOptions: CalendarOptions = {
  initialView: 'dayGridMonth',
  dateClick: this.handleDateClick.bind(this.eventss), 
  events:this.eventss
  
  };

  handleDateClick(arg) {
    alert(arg.dateStr)
    console.log(this.calendarOptions);
  }


  }
