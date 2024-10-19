import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // Check if running in the browser
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');

    if (token) {
      // Token exists, allow access to the route
      return true;
    } else {
      // No token, redirect to sign-in page
      router.navigateByUrl('/signin');
      return false;
    }
  } else {
    // If running on the server or in a non-browser environment, deny access
    return false;
  }




  // const token = localStorage.getItem('token');

  // if (token) {
  //   // Token exists, allow access to the route
  //   return true;
  // } else {
  //   // No token, redirect to sign-in page
  //   router.navigateByUrl('/signin');
  //   return false;
  // }
};
