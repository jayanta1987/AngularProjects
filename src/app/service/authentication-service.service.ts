import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor() { }

  authenticate(username,password){

    if(username==="jd"&&password==="123"){
      sessionStorage.setItem('authenticateUser',username);
      return true;
    }else{
      return false;
    }

  }
}
