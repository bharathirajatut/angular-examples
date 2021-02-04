import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient,
  private router:Router) { }

  ngOnInit() {

  }

  gotoUser()
  {
    //this.router.navigateByUrl('/user/raja')
    this.router.navigate(['/user/raja'],{queryParams:{source:'Application'}})

  }

  gotoUser2()
  {
    let user={name:'Raja',age:20,email:'raja@mail.com'}
    let navigationExtras: NavigationExtras = {
      state: {
        user: user
      }
    };
    this.router.navigate(['/user/raja'], navigationExtras);
  }

}
