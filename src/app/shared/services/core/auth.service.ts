import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logged: boolean;
  constructor() {
    this.logged = false;
  }

  isLogged() {
    return this.logged;
  }
}
