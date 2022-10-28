import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit{
  title = 'HealthcareApp';
  constructor(private _router:Router) { }
  ngOnInit():void
  {

  }
  btnClickAddMember() {
      this._router.navigate(["user/search/add"]);
  }

}
