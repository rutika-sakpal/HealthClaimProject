import { Component, OnInit } from '@angular/core';
import { RoleData } from '../models/roledata';
import { UserData } from '../models/userdata';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  roles : RoleData[] = [
    {roleId : 1, roleName : "Admin"},
    {roleId : 2, roleName : "Member"}
  ];
  constructor() { }

  UserDataModel: UserData = new UserData();
  ngOnInit(): void {
  }
  registerUser(){
    debugger;
 
  }
}
