import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registerError = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  register(form: { value: any; }) {
    // if (form.value.username === this.admin.username && form.value.password === this.admin.password) {
    //   this.router.navigate(['user-mgnmt']);
    // }
    // else {
    //   this.loginError = 'Wrong credentials! Please try again.';
    // }
    console.log('Registered successfully');
    console.log(form.value);
    alert('Registered successfully! Please login to continue');
    this.router.navigate(['login']);
  }

}
