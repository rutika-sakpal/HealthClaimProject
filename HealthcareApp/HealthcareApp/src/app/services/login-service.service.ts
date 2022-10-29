import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  _loginUrl="https://localhost:44363/api/gateway/healthclaim/login";
  _registerUrl = "https://localhost:44363/api/gateway/healthclaim/register";

  constructor(private http:HttpClient, private _router:Router) { }

  loginUser(login:any){
    return this.http.post<any>(this._loginUrl,login);
  }

  registerUser(login:any){
    return this.http.post<any>(this._registerUrl,login);
  }
}
