import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  _getAllClaimType="https://localhost:44363/api/gateway/healthclaim/getallclaimtype";
 _addClaim="https://localhost:44363/api/gateway/healthclaim/addclaim";
  // _getAllClaimType="https://claim20221107202012.azurewebsites.net/api/Claim/GetAllClaimType";
  // _addClaim="https://claim20221107202012.azurewebsites.net/api/Claim/add-claim";

  constructor(private http:HttpClient, private _router:Router) { }

  GetAllClaimType()
  {
    return this.http.get(this._getAllClaimType);
  }
  AddClaim(claim:any){
    return this.http.post<any>(this._addClaim,claim);
  }
}
