import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  _addMember="https://localhost:44363/api/gateway/healthclaim/addmember";
  _getAllMember="https://localhost:44363/api/gateway/healthclaim/getallmember";
  _getAllPhysician="https://localhost:44363/api/gateway/healthclaim/getallphysician";
  _searchMember="https://localhost:44363/api/gateway/healthclaim/searchmember";
  _getAllMemberById="https://localhost:44363/api/gateway/healthclaim/getallmemberbyId?id=";
_getMemberDetailByMemberId="https://localhost:44363/api/gateway/healthclaim/getmemberdetailbymemberId?memberId=";

  constructor(private http:HttpClient, private _router:Router) { }

  AddMember(member:any){
    return this.http.post<any>(this._addMember,member);
  }
  GetAllMember()
  {
    return this.http.get(this._getAllMember);
  }
  GetAllPhysician()
  {
    return this.http.get(this._getAllPhysician);
  }
  SearchMember(searchmember:any){
    return this.http.post<any>(this._searchMember,searchmember);
  }
  GetAllMemberById(input:any)
  {
    return this.http.get(this._getAllMemberById+input);
  }
  GetMemberDetailByMemberId(input:any)
  {
    return this.http.get(this._getMemberDetailByMemberId+input);
  }
}
