import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClaimTypeData } from '../models/claimtypedata';
import { ClaimService } from '../services/claim.service';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {

  id: any; 
  constructor(private http: HttpClient,private route: ActivatedRoute ,private _service:ClaimService,private _auth:LoginServiceService) { }
  ClaimTypeList:Array<ClaimTypeData>=new Array<ClaimTypeData>();
  
  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get("id");
    this.GetAllClaimType();
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
}
