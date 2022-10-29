import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterData } from '../models/registerdata';
import { RoleData } from '../models/roledata';
import { LoginServiceService } from '../services/login-service.service';


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
  constructor(private _service :LoginServiceService,private _router:Router) { 
    this.getAllRoles();
  }
  getAllRoles() : RoleData[]{
    return this.roles;
  }
  RegisterDataModel: RegisterData = new RegisterData();
  ngOnInit(): void {
  }
  registerUser(){
    debugger;
    var _registerData = {
      userName: this.RegisterDataModel.userName,
      password: this.RegisterDataModel.password,
      userRole:this.RegisterDataModel.roleCategory
    };
    this._service.registerUser(_registerData).subscribe(res=>{
      localStorage.setItem('token',res.token);
     this._router.navigate(["user/search"]);
    },res=>console.log(res));
  }
}
