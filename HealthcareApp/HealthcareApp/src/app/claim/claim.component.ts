import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {

  id: any; 
  constructor(private http: HttpClient,private route: ActivatedRoute,private _auth:LoginServiceService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get("id");
  }

}
