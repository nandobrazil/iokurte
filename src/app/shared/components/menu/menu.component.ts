import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMenuItem } from '../../interfaces/core/IMenuItem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  isVerified = true;
  menuItem: IMenuItem[];
  constructor(
    private router: Router
  ) {
    this.menuItem = [
      { label: 'Início', url: '/', icon:'fa-house' },
      { label: 'Adicionar', url: '/friends', icon:'fa-users' },
      { label: 'Depoimentos', url: '/depoiment', icon:'fa-icons' },
      { label: 'Galeria', url: '/galery', icon:'fa-image' },
      { label: 'Jogos', url: '/games', icon:'fa-house' },
      { label: 'Início', url: '/', icon:'fa-gamepad' },
    ]
  }

  ngOnInit(): void {
  }


  navigateTo(url: string) {
    this.router.navigate([url]);
  }
}
