import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from '../models/userdata';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router,private _service:LoginServiceService) { }

  UserDataModel: UserData = new UserData();
  ngOnInit(): void {
  }

  loginUser() {
    var _userData = {
      userName: this.UserDataModel.userName,
      password: this.UserDataModel.password
    };
    this._service.loginUser(_userData).subscribe(res => {
      debugger;
      // console.log('Hi You are able to login');        
      localStorage.setItem('token', res.token);
      this._router.navigate(["user/search"]);
    }, res => console.log(res));
 
  }

}
