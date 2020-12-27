import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IpService {

  constructor() { }

  static getIPAddress()
  {
    
    //let ip="http://localhost/async/"
    let ip="http://127.0.0.1/async/" //for mac only
   
    return ip; 
  }
}
