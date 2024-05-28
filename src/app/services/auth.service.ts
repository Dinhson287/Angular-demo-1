import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }
  login(username:String,password:String){
    if(username ==='son287'&&password ==='2807'){
      return 200;
    }
    else{
      return 403;
    }
  }
  logout(){
    (<any>this.router).navigate(['login']);
  }
}
