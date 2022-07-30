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

  constructor(private trainerservice:TrainerService) { }


  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), 
    events: [
      { title: 'HappyBirthday', start: '2022-07-27' , end:'2022-08-02' ,  },
      { title: 'Holiday', date: '2022-07-28', color:'red'}
    ]
  };

  handleDateClick(arg) {
    alert(arg.dateStr)
  }



  ngOnInit(): void {

    let token = localStorage.getItem("token")
    this.trainerservice.scheduledata(token)
    .subscribe((data)=>{
      console.log(data)
    this.trainerdata=JSON.parse(JSON.stringify(data))
    
    
  })
   }

  }
