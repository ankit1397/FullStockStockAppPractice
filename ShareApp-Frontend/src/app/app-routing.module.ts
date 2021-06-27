import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CSVReadComponent } from './csvread/csvread.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: UserLoginComponent,
  },
  {
    path: 'register',
    component: UserRegisterComponent,
  },
  {
    path: 'csvupload',
    component: CSVReadComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
