import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {NgForm} from '@angular/forms';
import {RegistrationService} from '../registration.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = new User();
  msg='';
  constructor(private _service:RegistrationService,private _router:Router) { }

  ngOnInit(): void {
    
    
  }
  registerUser(){

    this._service.registerUser(this.user).subscribe(
      data=>{
        console.log(data);
        this.msg="Registration Successful";
        this._router.navigate(['/login']);
      },
      error =>{
        console.log("Exception Occured !!");
        this.msg=error.error;
        this._router.navigate(['/login']);
      }
    );
  }

}
