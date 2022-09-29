import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/core/auth.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  isLogged: boolean;
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.isLogged = this.authService.isLogged();
  }

  ngOnInit(): void {
    if (!this.isLogged)
      this.router.navigate(['/login']);
  }

}
