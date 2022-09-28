import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';

import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    PasswordModule,
    DividerModule
  ]
})
export class LoginModule { }
