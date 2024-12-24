import { Component, Inject, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { AuthService } from '../../services/auth-service/auth.service';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/storage-service/local-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  // authService = inject(AuthService)
  localStorage = inject(LocalStorageService)
  // constructor(private authService: AuthService) { }

  id: string | null = null;
  role: string | null = null;
  isUserLoggedIn!: boolean;
  isAdminLoggedIn!: boolean;
  hasToken!: boolean;


  // isUserLoggedIn: boolean = this.localStorage.isUserLoggedIn();
  // isAdminLoggedIn: boolean = this.localStorage.isAdminLoggedIn();

  constructor(
    @Inject(PLATFORM_ID)
    private platformId: Object,
    private router: Router,
  ) {}


  ngOnInit(): void {
    // this.router.events.subscribe((event) => {
    //   if (event.constructor.name === 'navigationEnd') {
        this.isUserLoggedIn =  this.localStorage.isUserLoggedIn();
        this.isAdminLoggedIn =  this.localStorage.isAdminLoggedIn();
        this.hasToken =  this.localStorage.hasToken();
    //   }
    // });
  }

  // Call the logout method
  logout() {
    this.localStorage.logOut();
    this.router.navigateByUrl('signin');
  }

  // if (isPlatformBrowser(this.platformId)) {
  //   this.id = localStorage.getItem('I_userId');
  //   // this.router.navigateByUrl('home');
  //   this.router.navigate(['home']);
  //   this.role = localStorage.getItem('I_role');
  // }

  // isUserLoggedIn: boolean = LocalStorageService.isUserLoggedIn();
  // isAdminLoggedIn: boolean = LocalStorageService.isAdminLoggedIn();

  // ngOnInit(): void {
  //   this.router.events.subscribe(event =>{
  //     if (event.constructor.name === "navigationEnd"){
  //       // this.isUserLoggedIn =  LocalStorageService.isUserLoggedIn();
  //       // this.isAdminLoggedIn =  LocalStorageService.isAdminLoggedIn();
  //     }
  //   })
  // }
}
