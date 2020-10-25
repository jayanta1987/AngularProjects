import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/model/User';
import { API_URL, USERS_SERVICE } from 'src/app/app.constant';

@Injectable({
  providedIn: 'root'
})
export class UserDataServiceService {

  constructor(private http:HttpClient) { }

  createUser(user:User){
   
    return this.http.post(`http://localhost:8080/users/save`,user)
  }
}
