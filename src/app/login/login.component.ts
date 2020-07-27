import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg='';
  user = new User();
  constructor(private service:RegistrationService,private _router:Router) { }

  ngOnInit(): void {
  }
  loginUser(){
    this.service.loginUser(this.user).subscribe(
      data => {
        console.log(data)
        this._router.navigate(['/loginsuccess']);
        //https://www.youtube.com/watch?v=7DzdebaSgxg&t=5060s
      },
      error=> {
        console.log('response not found');
        this.msg='Bad Credationals,please enter valid emailId and password';
      }
    );
  }

  goToRegistration(){
    this._router.navigate(['/registration']);
  }
}
