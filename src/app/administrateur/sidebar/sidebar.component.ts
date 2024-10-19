import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) { }


  isDashboard(): boolean {
    // Check if the current route starts with '/admin'
    return this.router.url.startsWith('/admin/dashboard'); // if you have just one route
  }


  logout() {
    // Remove the token from localStorage
    localStorage.removeItem('token');
    
    // Optionally clear all localStorage/sessionStorage data
    // localStorage.clear(); // if you want to clear all data
    
    // Navigate back to the login page (or home page)
    this.router.navigateByUrl('/signin'); // Adjust the path to your login route
    alert("are you shur");
  }

  
}
