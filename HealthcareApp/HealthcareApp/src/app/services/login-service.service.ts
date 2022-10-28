import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  _loginUrl="https://localhost:44325/api/Login/login-user";

  constructor(private http:HttpClient, private _router:Router) { }

  loginUser(login:any){
    debugger;
    return this.http.post<any>(this._loginUrl,login);
  }
}
