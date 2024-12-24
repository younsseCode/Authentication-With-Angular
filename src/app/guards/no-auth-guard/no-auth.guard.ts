import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageService } from '../../services/storage-service/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class NoAuthGuard implements CanActivate {
  constructor(private localStorage: LocalStorageService, private router: Router) {}

  canActivate(): boolean {
    if (this.localStorage.hasToken()) {
      console.log("has token ? : ",this.localStorage.hasToken());
      alert("You are already signin ")
      this.router.navigateByUrl("/home");
      return false;
    }
    return true;
  }
}




// import { inject, Inject } from '@angular/core';
// import {
//   ActivatedRouteSnapshot,
//   CanActivateFn,
//   Router,
//   RouterStateSnapshot,
// } from '@angular/router';
// import { LocalStorageService } from '../../services/storage-service/local-storage.service';

// export const noAuthGuard: CanActivateFn = (
//   route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot
// ) => {
//   // const router = inject(Router);
//   // const localStorageService = inject(LocalStorageService);

//   // if (LocalStorageService.hasToken() && LocalStorageService.getRole()=="USER") {
//   //   router.navigateByUrl("/user/dashboard");
//   //   return false;
//   // } else if (LocalStorageService.hasToken() && LocalStorageService.getRole()=="ADMIN") {
//   //   router.navigateByUrl("/admin/dashboard");
//   //   return false;
//   // }
//   return true;
// };

