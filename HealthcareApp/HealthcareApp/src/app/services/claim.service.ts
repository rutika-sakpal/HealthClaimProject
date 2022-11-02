import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  _getAllClaimType="https://localhost:44363/api/gateway/healthclaim/getallclaimtype";
  constructor(private http:HttpClient, private _router:Router) { }

  GetAllClaimType()
  {
    return this.http.get(this._getAllClaimType);
  }
}
