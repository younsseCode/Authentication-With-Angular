import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageService } from '../../services/storage-service/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivate {

  constructor(private localStorage: LocalStorageService, private router: Router) {}

  canActivate(): boolean {
    if(this.localStorage.isAdminLoggedIn()){
      // this.router.navigateByUrl("/user/dashboard");
      // alert("you don't have access of this page");
        return true;
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



// export const userGuard: CanActivateFn = (
//   route : ActivatedRouteSnapshot,
//   state: RouterStateSnapshot
// ) => {

  // const router = inject (Router);
  // const localStorageService = inject  (LocalStorageService);

  // if(LocalStorageService.isAdminLoggedIn()){
  //   router.navigateByUrl("/admin/dashboard");
  //   alert("you don't have access of this page");
  //   return false;
  // }
  // else if(!LocalStorageService.hasToken()){
  //   LocalStorageService.logOut();
  //   router.navigateByUrl("/signin");
  //   alert("you are not logged in, please login first");
  //   return false;
  // }

//   return true;
// }
