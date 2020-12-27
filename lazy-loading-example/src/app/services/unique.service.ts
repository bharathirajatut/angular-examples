import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { IpService } from './ip.service';

@Injectable({
  providedIn: 'root'
})
export class UniqueService {

  constructor(public http: HttpClient) { }
  ip=IpService.getIPAddress()


  checkUserName(username)
  {
    return new Promise(resolve => {
   
      let data={username:username};
      this.http.get(this.ip+'validate/check-username.php?username='+username,{
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
        responseType: 'json' 
     })
      .subscribe(res => {
      //send success response
      resolve(res) 
      }, (err) => {
      //send error response
      resolve(false);
    });
  
});
  }

}
