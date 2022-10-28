import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { MasterComponent } from '../master/master.component';
import { Mainroutes } from '../routing/mainroutes';
import { HomeComponent } from './home.component';
import { RegistrationComponent } from '../registration/registration.component';
import { LoginServiceService } from '../services/login-service.service';
import { AddmemberComponent } from '../addmember/addmember.component';



@NgModule({
  declarations: [
    HomeComponent,
    MasterComponent,
    LoginComponent,
    RegistrationComponent,
    AddmemberComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(Mainroutes)
  ],
  providers: [LoginServiceService],
  bootstrap: [MasterComponent]
})
export class MasterModule { }
