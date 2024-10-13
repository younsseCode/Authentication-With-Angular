import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { IStaticMethods } from 'preline/preline';
import { isPlatformBrowser } from '@angular/common';



declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}
// decorateur :
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PortfolioAngular';



  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) { }

  isAuthentificationPages(): boolean {
    // Check if the current route starts with '/admin'
    // return this.router.url.startsWith('/admin'); // if you have just one route
    const adminRoutes = ['/signin', '/signup']; // Add all your admin routes here
    return adminRoutes.some(route => this.router.url.startsWith(route));
  }

  isAdminPage(): boolean {
    // Check if the current route starts with '/admin'
    return this.router.url.startsWith('/admin'); // if you have just one route
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationEnd) {
          setTimeout(() => {
            window.HSStaticMethods.autoInit();
          }, 100);
        }
      });
    }
  }
  
}
