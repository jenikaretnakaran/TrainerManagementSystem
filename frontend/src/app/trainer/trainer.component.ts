import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  constructor(private route:Router , public auth:AuthService) { }

  id=localStorage.getItem('email');


  btnclk1(){
    this.route.navigate(['/trainer/enrollment']).then(() => {
      window.location.reload();
    })  
  }

  btnclk2(){
    this.route.navigate(['/trainer'])
  }

  btnclk3(){
    this.route.navigate(['/trainer/profile'])
  }

  btnclk4(){
    this.route.navigate(['/trainer/schedule'])
  }

  btnclk5(){
    localStorage.removeItem("token") 
    this.route.navigate(['login'])
    localStorage.clear();
    sessionStorage.clear();
  }
  
  btnclk6(){
    this.route.navigate(['/trainer/approvedata'])
  }


  ngOnInit(): void {
    this.auth.verifieduser(this.id)
  }

}
