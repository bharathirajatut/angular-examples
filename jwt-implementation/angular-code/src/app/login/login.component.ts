import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient,
  private router:Router) { }

  ngOnInit() {

    let token=localStorage.getItem('info');
   
    this.http.post('http://localhost:3000/verify',{token:token}).subscribe(data=>{
      if(data["verified"]==1)
      {
        //valid token
        this.router.navigateByUrl("home")
      } 
    })

  }
  username=''
  password=''
  login()
  {
    this.http.post('http://localhost:3000/login',
    {username:this.username,password:this.password}
    ).subscribe(data=>{
      if(data["status"]==1)
      {
        //store locally
        localStorage.setItem('info',data["token"]);

        this.router.navigateByUrl("home")
      }else{
        //show error message
      }
    })
  }

}
