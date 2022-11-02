import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClaimData } from '../models/claimdata';
import { ClaimTypeData } from '../models/claimtypedata';
import { MemberData } from '../models/memberdata';
import { ClaimService } from '../services/claim.service';
import { LoginServiceService } from '../services/login-service.service';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {

  id: any; 
  constructor(private http: HttpClient,private route: ActivatedRoute ,private _memberService:MemberService,private _service:ClaimService,private _auth:LoginServiceService) { }
  ClaimTypeList:Array<ClaimTypeData>=new Array<ClaimTypeData>();
  MemberData:Array<MemberData>=new Array<MemberData>();
  ClaimDataModel: ClaimData = new ClaimData();
  
  ngOnInit(): void {
    debugger;
    this.id=this.route.snapshot.paramMap.get("id");// memberid
    this.GetAllClaimType();
    this.GetMemberDetailByMemberId(this.id);
  }

  GetAllClaimType()
  {
    this._service.GetAllClaimType().subscribe(res=>this.ClaimTypeSuccess(res),res=>console.log(res)); 
  }
  ClaimTypeSuccess(response:any)
  {
    debugger;
    this.ClaimTypeList=response;
  }
  GetMemberDetailByMemberId(input:any)
  {
    this._memberService.GetMemberDetailByMemberId(input).subscribe(res => this.PostSuccess(res), res => console.log(res));
  }
  PostSuccess(input: any) {
    debugger;
    console.log(input);
    this.MemberData = input;
  }

  AddClaim(event:any)
  {
    debugger;
    var _userData = {
      memberId:Number(this.id) , //memberid
      claimRemark: this.ClaimDataModel.claimRemark,
      claimAmount:  Number (this.ClaimDataModel.claimAmount),
      claimDate:this.ClaimDataModel.claimDate,
      claimTypeId:Number(this.ClaimDataModel.claimTypeId)
    };
    this._service.AddClaim(_userData).subscribe(res=>this.Success(res),res=>console.log(res))
    this.ClaimDataModel = new ClaimData();  
  }
  Success(input: any) {
    console.log(input);
    // this.MemberDataModels = input;
    // for(var i=0;i<this.MemberDataModels.length;i++){
    //   console.log()
    // }
  }
}
