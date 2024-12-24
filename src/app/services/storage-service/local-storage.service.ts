import { Injectable } from '@angular/core';

const USERID = "I_user";
const ROLE = "I_role";
const TOKEN = "I_token"

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private isBrowser = typeof window !== 'undefined' && typeof localStorage !== 'undefined';
//

  constructor() { } 

  saveUserId(userId:any){
    // if (this.isBrowser) {
    window.localStorage.removeItem(USERID);
    window.localStorage.setItem(USERID,userId);
    // }
  }

  saveUserRole(role:any){
    // if (this.isBrowser) {
    window.localStorage.removeItem(ROLE);
    window.localStorage.setItem(ROLE,role);
    // }
  }

  saveToken(token:any){
    // if (this.isBrowser) {
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN,token);
    // }
  }
  
  public getToken():string | null{ //oui static
    // if (this.isBrowser) {
    return localStorage.getItem(TOKEN);
    // }
    // return null;
  }
    
  // getId(){
  //   localStorage.getItem(USERID);
  // }

  public hasToken(): boolean {
    if (this.isBrowser) {
      return localStorage.getItem(TOKEN) !== null; // Return true if the token exists
    }
    return false; // Return false for non-browser environments
  }
  
  // public hasToken(): boolean{ //oui static
  //   if(localStorage.getItem(TOKEN)){
  //   // if(this.getToken() === null){
  //   //   return false;
  //   // }
  //   return false;
  // }
  // return true;
  // }

  public isUserLoggedIn(): boolean{ //oui static
    if(this.getToken() === null){
      return false;
    }
    const role = this.getRole();
    return role == "USER";
  }
  
  public isAdminLoggedIn(): boolean{ //oui static
    if(this.getToken() === null){
      return false;
    }
    const role = this.getRole();
    return role == "ADMIN";
  }

  public getRole():string | null{ //oui static
    // if (this.isBrowser) {
    return localStorage.getItem(ROLE);
    // }
    // return null;
    // const user = this.getUser();
    // if(user == null){
    //   return '';
    // }
    // return user.role;
  }

  public getUser():string | null{ //oui static
    // if (this.isBrowser) {
    return JSON.parse(localStorage.getItem(USERID)!)
    // }
    // return null;
  }

   // Logout
   public logOut() { //oui static
    // Remove the token from localStorage
    window.localStorage.removeItem(TOKEN);
    window.localStorage.removeItem(ROLE);
    window.localStorage.removeItem(USERID);
  }
}