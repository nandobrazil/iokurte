import { Component, OnInit } from '@angular/core';
import { IStatusProfile } from 'src/app/shared/interfaces/IStatusProfile';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  statusList: IStatusProfile[] = [];
  constructor() {
    this.statusList = [
      { label: 'depoimentos', value: 114, icon: 'fa-heart' },
      { label: 'fãs', value: 14, icon: 'fa-star', color: '#ffd02c' },
      { label: 'confiável', value: 2, icon: 'fa-face-smile', color: '#ffd02c', repeatIcon: true },
      { label: 'legal', value: 2, icon: 'fa-heart', color: '#26cbff', repeatIcon: true },
      { label: 'sexy', value: 3, icon: 'fa-heart', repeatIcon: true },
    ]
  }

  ngOnInit(): void {
  }

}
