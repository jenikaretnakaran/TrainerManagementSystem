import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-trainer-home',
  templateUrl: './trainer-home.component.html',
  styleUrls: ['./trainer-home.component.css']
})
export class TrainerHomeComponent implements OnInit {

  id=localStorage.getItem('email');


  constructor(public auth:AuthService) { }

  ngOnInit(): void {
    this.auth.verifieduser(this.id)

  }


}
