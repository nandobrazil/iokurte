import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLogged: boolean;
  constructor(
    private router: Router,
  ) {
    this.isLogged = false;
  }

  ngOnInit(): void {
    if (this.isLogged)
      this.router.navigate(['/']);
  }

}
