import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  display_name=''
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {

    //get token
    let token=localStorage.getItem('info');
   
    this.http.post('http://localhost:3000/verify',{token:token}).subscribe(data=>{
      if(data["verified"]==1)
      {
        //valid token
        //stay in page

      }else{
        //show error message
        //redirect to login page
        this.router.navigateByUrl("login")

      }
    })
  

  }

  logout()
  {
    //reset local storage
    //redirect to login page
    localStorage.setItem('info','0');
    this.router.navigateByUrl("login")
    
  }

  
}


