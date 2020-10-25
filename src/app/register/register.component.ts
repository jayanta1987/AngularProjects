import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { UserDataServiceService } from '../service/data/user-data-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  uid=-1;
  user:User;

  errorMessage: string
  successMessage: string


  constructor(private userDataService:UserDataServiceService) { }

  ngOnInit(): void {
    this.user = new User(this.uid,'','','','','')
  }
  registerUser() {

    console.log(this.user);

    if(this.user.id===-1){
      console.log("Id of new User",this.user.id)
      this.userDataService.createUser(this.user).subscribe(
      response=>{
        console.log("Creating data........",response)
        this.successMessage="User has been created successfully."
      },
      error=>{
        this.errorMessage=error.error.message
      }
    )
    }
  }

}
