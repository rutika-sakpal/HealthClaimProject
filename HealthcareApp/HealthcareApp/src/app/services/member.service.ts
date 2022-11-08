import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

//   _addMember="https://member20221107185752.azurewebsites.net/api/Member/add-member";
//   _getAllMember="https://member20221107185752.azurewebsites.net/api/Member/GetAllMember";
//   _getAllPhysician="https://member20221107185752.azurewebsites.net/api/Member/GetAllPhysician";
//   _searchMember="https://member20221107185752.azurewebsites.net/api/Member/SearchMember";
//   _getAllMemberById="https://member20221107185752.azurewebsites.net/api/Member/GetAllMemberById?id=";
// _getMemberDetailByMemberId="https://member20221107185752.azurewebsites.net/api/Member/GetMemberDetailByMemberId?memberId=";
// _getMemberId="https://member20221107185752.azurewebsites.net/api/Member/GetMemberId?userId=";

_addMember="https://localhost:44363/api/gateway/healthclaim/addmember";
_getAllMember="https://localhost:44363/api/gateway/healthclaim/getallmember";
_getAllPhysician="https://localhost:44363/api/gateway/healthclaim/getallphysician";
_searchMember="https://localhost:44363/api/gateway/healthclaim/searchmember";
_getAllMemberById="https://localhost:44363/api/gateway/healthclaim/getallmemberbyId?id=";
_getMemberDetailByMemberId="https://localhost:44363/api/gateway/healthclaim/getmemberdetailbymemberId?memberId=";
_getMemberId="https://localhost:44363/api/gateway/healthclaim/getmemberId?userId=";

  constructor(private http:HttpClient, private _router:Router) { }

  public memberId:any;

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
  GetMemberId(input:any)
  {
    return this.memberId= this.http.get(this._getMemberId+input);
  }
}
