import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  loginError = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(form: { value: any; }) {
    // if (form.value.username === this.admin.username && form.value.password === this.admin.password) {
    //   this.router.navigate(['user-mgnmt']);
    // }
    // else {
    //   this.loginError = 'Wrong credentials! Please try again.';
    // }
    console.log('logged in');
    console.log(form.value);
    this.router.navigate(['csvupload']);
  }

  register(){
    this.router.navigate(['register']);
  }

}
