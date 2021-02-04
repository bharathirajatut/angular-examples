import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userId:any=''
  source:any=''
  constructor(private router:Router,
    private activatedRoute:ActivatedRoute) { 

    this.activatedRoute.paramMap.subscribe(params=>{
      this.userId=params.get('userId') //+ string to number
    })

    this.source=this.activatedRoute.snapshot.queryParamMap.get('source')

    this.activatedRoute.queryParamMap.subscribe(queryParams => {
      console.log(queryParams.get("source"));
      if (this.router.getCurrentNavigation().extras.state) {
        let user = this.router.getCurrentNavigation().extras.state.user;
        console.log(user);
        
      }
    })

  }

  ngOnInit() {
  }

}
