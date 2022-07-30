import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  constructor(private route:Router) { }


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
  }
  btnclk6(){
    this.route.navigate(['/trainer/approvedata'])
  }


  ngOnInit(): void {
    let token = localStorage.getItem("email")
  }

}
