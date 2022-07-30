import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; 


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  trainer={
    batchid:"",
    course:"",
    start:"",
    end:"",
    starttime:"",
    endtime:""
  }

  constructor() { }


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
  }

}