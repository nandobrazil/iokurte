import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICardProfile } from '../../interfaces/ICardProfile';
import { IContainerCard } from '../../interfaces/IContainerCard';

@Component({
  selector: 'app-container-card',
  templateUrl: './container-card.component.html',
  styleUrls: ['./container-card.component.scss']
})
export class ContainerCardComponent implements OnInit {

  @Input() cards: IContainerCard = {} as IContainerCard;
  constructor(
    private router: Router
  ) {
    console.log(this.cards);
  }

  ngOnInit(): void {
  }

  navigate(card: ICardProfile) {
    this.router.navigate([`/me/${card.id}`]);
  }
}
