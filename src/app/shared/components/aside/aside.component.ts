import { Component, OnInit } from '@angular/core';
import { ICardProfile } from '../../interfaces/ICardProfile';
import { IContainerCard } from '../../interfaces/IContainerCard';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  cardsFriend: IContainerCard;
  cardsCommunity: IContainerCard;

  constructor() {
    let perfis: ICardProfile[] = [];
    for(let i = 0; i < 9; i++) {
      perfis.push({
        id: 0,
        src: 'foto-perfil.png',
        href: '#',
        title: 'Fernando Conde',
        isVerified: true
      });
    }
    this.cardsFriend = {
      title: 'Amigos',
      maxLenght: 8,
      cardProfile: perfis
    }
    this.cardsCommunity = {
      title: 'Comunidades',
      maxLenght: 8,
      cardProfile: perfis
    }
    console.log(this.cardsFriend)
    console.log(this.cardsCommunity)
  }

  ngOnInit(): void {
  }

}
