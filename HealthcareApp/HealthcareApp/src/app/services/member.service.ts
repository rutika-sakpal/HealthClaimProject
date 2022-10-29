import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  _addMember="https://localhost:44363/api/gateway/healthclaim/addmember";

  constructor(private http:HttpClient, private _router:Router) { }

  AddMember(member:any){
    return this.http.post<any>(this._addMember,member);
  }
}
