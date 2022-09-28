import { Component } from '@angular/core';
import { ICardProfile } from './shared/interfaces/ICardProfile';
import { IContainerCard } from './shared/interfaces/IContainerCard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isLogged = false;
}
