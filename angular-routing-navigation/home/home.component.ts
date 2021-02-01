import { Component, OnInit, ViewChild } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private router:Router) { }

  ngOnInit() {

  }

  goAbout()
  {
    this.router.navigateByUrl("about-us")  
  }

  
}


