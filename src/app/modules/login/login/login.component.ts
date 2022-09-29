import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLogged: boolean;
  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.isLogged = this.authService.isLogged();
  }

  ngOnInit(): void {
    if (this.isLogged)
      this.router.navigate(['/in']);
  }

  displayViewPassword() {
    console.log('test');
  }

}
