import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router) { }

  logout(){
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/login/adminlogin'])
  }

  ngOnInit(): void {
  }

}
