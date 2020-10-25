import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from '../service/authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = 'jayanta.dhar.career@gmail.com';
  password = '';
  errorMessage = "Invalid Credential";
  invalidLogin = false;

  constructor(private router: Router, private authenticationservice:AuthenticationServiceService) { }

  ngOnInit(): void {
  }

  handleLogin() {

    if(this.authenticationservice.authenticate(this.email,this.password)){
      this.router.navigate(['dashboard']);
      
    }else{
      this.invalidLogin = true;
    }

   

  }

}
