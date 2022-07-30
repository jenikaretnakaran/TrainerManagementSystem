import { Component, OnInit } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
})
export class CreateEventComponent implements OnInit {
  coursedata = [];
  courses;
  course;
  trainers = [];
  trainerdata;
  emaildata;
  email;
  associate;

  eventdata = {
    trainer: '',
    associative: '',
    startDateTime: '',
    endDateTime: '',
    courseId: '',
    batchId: '',
    meetingLink: '',
    course: '',
    eStart: '',
    eEnd: '',
  };
  startDate;
  endDate;
  bookedStart;
  bookedEnd;
  length;

  startstamp;
  endstamp;
  errorMsg;
  err;
  isEmpty;
  isClick = true;

  courseIds = ['01_DSA', '02_FSD', '03_RPA'];

  batchIds = ['DSA001', 'DSA002', 'FSD001'];
  constructor(private adminservice: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.adminservice.getCourses().subscribe((data) => {
      this.coursedata = JSON.parse(JSON.stringify(data));
      this.courses = this.coursedata.map(({ title }) => title);
      this.eventdata.courseId = this.courseIds[0];
      this.eventdata.batchId = this.batchIds[0];
    });

    //fetching startdate
    this.adminservice.getDate().subscribe((data) => {
      this.bookedStart = JSON.parse(JSON.stringify(data)).map(
        ({ startDate }) => startDate
      );
      this.length = this.bookedStart.length;
    });

    //fetching enddate
    this.adminservice.getEndDate().subscribe((data) => {
      this.bookedEnd = JSON.parse(JSON.stringify(data)).map(
        ({ endDate }) => endDate
      );
    });
  }

  onCourseSelect(course) {
    this.adminservice.selectedCourse(course).subscribe((data) => {
      this.trainers = JSON.parse(JSON.stringify(data));
      this.trainerdata = this.trainers.map(({ trainerName }) => trainerName);
      console.log(this.trainerdata);
    });
  }

  onTrainerSelect() {
    console.log(this.eventdata.trainer);
    this.associate = this.trainerdata.filter(
      (p) => p !== this.eventdata.trainer
    );
  }

  checkDate()
   {
    this.isClick = false;
    this.startstamp = Date.parse(this.startDate);
    this.endstamp = Date.parse(this.endDate);
    console.log('startstamp' + this.startstamp);
    console.log('endstamp' + this.endstamp);

    // validatedates
    if (this.startstamp === this.endstamp) {
      this.errorMsg = 'SESSION START AND END SHOULD NOT BE SAME';
      this.err = true;
    } 
    else if (this.startstamp > this.endstamp) {
      this.errorMsg = 'INVALID DATE AND TIME';
      this.err = true;
    } 
    else if (this.startstamp == '' || this.endstamp == '') {
      this.errorMsg = 'INVALID DATES';
      this.err = true;
    } 
    // else if (isNaN(this.startstamp) || isNaN(this.endstamp)) {
    //   this.errorMsg = 'PROVIDE A VALID DATE AND TIME';
    //   this.err = true;
    // } 
    else 
    {
      for (let len = 0; len < this.length; len++) {
        if (
          this.startstamp >= this.bookedStart[len] &&
          this.startstamp <= this.bookedEnd[len]
        ) {
          this.errorMsg = 'SLOT UNAVAILABLE';
          this.err = true;
        } else if (this.endstamp - this.startstamp < 3600000) {
          this.errorMsg = ' SESSION TIME SHOULD BE MINIMUM OF ONE HOUR';
          this.err = true;
        } else {
          this.eventdata.startDateTime = this.startstamp;
          this.eventdata.endDateTime = this.endstamp;
          this.eventdata.eStart = this.startDate;
          this.eventdata.eEnd = this.endDate;
        }
      }
    }
  }

  reload() {
    this.startDate = '';
    this.endDate = '';
    this.err = false;
    this.errorMsg = '';
  }

  onSubmit() {
    
    this.isEmpty = Object.values(this.eventdata).some((x) => x === null || x === '' || x!==x );

    if (this.isEmpty === true) 
    {
      alert('Fields should not be empty');
      this.err = true;
      console.log(this.eventdata);
      location.reload();
    }
     else 
     {
      this.adminservice.allocatedData(this.eventdata).subscribe((data) => {
        console.log(data);
        alert('session created');
        this.router.navigate(['/admin/allocated-trainers']);
      });
    }
  }
}
