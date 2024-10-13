import { Component } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private portfolioService: PortfolioService) { }

  // Call the logout method
  logout() {
    this.portfolioService.logout();
  }

}
