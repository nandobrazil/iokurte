import { Component, Input, OnInit } from '@angular/core';
import { STORAGE_LIGHT_THEME_KEY } from '../../constants/storage-key';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() isLogged!: boolean;
  inputSearch = '';
  toggleUser = false;

  lightTheme = localStorage.getItem(STORAGE_LIGHT_THEME_KEY) === 'light-theme';
  constructor() { }

  ngOnInit() {
    this.setLightTheme();
  }

  saveAndChangeTheme() {
    this.lightTheme = !this.lightTheme;
    localStorage.setItem(STORAGE_LIGHT_THEME_KEY, this.lightTheme ? 'light-theme' : '');
    this.setLightTheme();
  }

  setLightTheme() {
    const lightTheme = localStorage.getItem(STORAGE_LIGHT_THEME_KEY);
    const body = document.getElementsByTagName('body')[0];
    lightTheme?.trim() ? body.classList.add(lightTheme || '') : body.classList.remove('light-theme');
  }

}
