import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageService } from '../../services/storage-service/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {

  constructor(
    private localStorage: LocalStorageService,
    private router: Router) {}

  canActivate(): boolean {
    if(this.localStorage.isUserLoggedIn()){
      alert("you don't have access of this page");
      this.router.navigateByUrl("/home");
        return false;
    }
    else if(!this.localStorage.hasToken()){
      this.localStorage.logOut();
        this.router.navigateByUrl("/signin");
        alert("you are not logged in, please login first");
        return false;
      }
    return true;
  }
}





// import { inject } from '@angular/core';
// import {
//   ActivatedRouteSnapshot,
//   CanActivateFn,
//   RouterStateSnapshot,
// } from '@angular/router';
// import { Router } from 'express';
// import { LocalStorageService } from '../../services/storage-service/local-storage.service';
// import { error } from 'console';

// export const adminGuard: CanActivateFn = (
//   route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot
// ) => {
  // const router = inject(Router);
  // const localStorageService = inject(LocalStorageService);

  // if (LocalStorageService.isUserLoggedIn()) {
  //   router.navigateByUrl("/user/dashboard");
  //   alert("you don't have access of this page");
  //   console.log("there is error here : ", error )
  //   return false;
  // } else if (!LocalStorageService.hasToken()) {
  //   LocalStorageService.logOut();
  //   router.navigateByUrl("/signin");
  //   alert('you are not logged in, please login first');
  //   return false;
  // }
//   return true;
// };
