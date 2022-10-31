import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemberData } from '../models/memberdata';
import { PhysicianData } from '../models/physiciandata';
import { SearchData } from '../models/searchdata';
import { MemberService } from '../services/member.service';

@Component({
  
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit{
  title = 'HealthcareApp';
  MemberDetailList:Array<MemberData>=new Array<MemberData>();
  PhysicianList:Array<PhysicianData>=new Array<PhysicianData>();
  SearchDataModel: SearchData = new SearchData();
  
  constructor(private _router:Router,private _service:MemberService) { }
  ngOnInit():void
  {
    this.GetAllPhysician();
      this.GetAllMember();
  }
  btnClickAddMember() {
      this._router.navigate(["user/search/add"]);
  }
  GetAllMember()
  {
    this._service.GetAllMember().subscribe(res=>this.MemberSuccess(res),res=>console.log(res)); 
  }
  MemberSuccess(response:any)
  {
    debugger;
    this.MemberDetailList=response;
  }
  GetAllPhysician()
  {
    this._service.GetAllPhysician().subscribe(res=>this.PhysicianSuccess(res),res=>console.log(res)); 
  }
  PhysicianSuccess(response:any)
  {
    debugger;
    this.PhysicianList=response;
  }
  clearSearch() {
    this.SearchDataModel.firstName = '';
    this.SearchDataModel.lastName = '';
    this.SearchDataModel.claimId = 0;
    this.SearchDataModel.memberId = '';
    this.SearchDataModel.physicianName = '';
  }
  SearchMember()
  {
    debugger;
    this._service.SearchMember(this.SearchDataModel).subscribe(res=>this.SearchMemberSuccess(res),res=>console.log(res)); 
  }
  SearchMemberSuccess(response:any)
  {
    debugger;
    this.MemberDetailList=response;
  }
}
