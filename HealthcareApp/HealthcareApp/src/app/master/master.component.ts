import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './master.component.html'
})
export class MasterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  LoggedIn(Input:boolean):boolean{    
    if(Input){
 
    }
    else{
  
    }
    return true;
  }
  Logout(){
    debugger;
 
  }

}
