import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { LocalStorageService } from '../storage-service/local-storage.service';

export const AUTH_HEADER = "autorization";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = "http://localhost:8085/";

  constructor(
    private http : HttpClient,
    private router : Router,
    private storageService : LocalStorageService
   ) { }

  // create} user :
  public signup(signupDto : any): Observable<any>{
    return this.http.post(this.apiUrl+ "signup", signupDto);
  }

  // Authentification :
  public signin(email:string , password:string): any{
  // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<[]>(this.apiUrl + 'login', 
                              { email, password },
                              { observe: 'response' })
      .pipe(
        tap(_ => this.log("user Authentication")),
        map((res: HttpResponse<any>) => {
        this.storageService.saveUserId(res.body.userId);
        this.storageService.saveUserRole(res.body.role);
        this.storageService.saveToken(res.body.token);
        const tokenLength = res.headers.get(AUTH_HEADER)?.length;
        // console.log(tokenLength);
        const bearerToken = res.headers.get(AUTH_HEADER)?.substring(7, tokenLength);
        // console.log(bearerToken);
        // this.storageService.saveToken(bearerToken);
        return res;
      })
    )
  } 

  log(message : string):void{
    console.log(`user Auth Service : ${message}`);
  }

  // logout(){
  //   LocalStorageService.logOut();
  // }
  
 




    // Authentification :
    // public signin(authenticationRequest : any): Observable<any>{
    //   // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    
    //     return this.http.post(this.apiUrl+ "login", authenticationRequest);
    //   }


  //   // Optionally clear all localStorage/sessionStorage data
  //   // localStorage.clear(); // if you want to clear all data
    
  //   // Navigate back to the login page (or home page)
  //   this.router.navigateByUrl('/signin'); // Adjust the path to your login route
  //   alert("are you shur");
  // }


  
  // DES METHODES POUR CRUD USER !
  
  // list all users :
  // public listUsers():Observable<any>{
  //   return this.http.get(this.apiUrl+"api/users",
  //     {headers: this.createAuthorizationHeader()})
  // }

  // private createAuthorizationHeader(): HttpHeaders{
  //   console.log("wselt l methode");
  //   const token = localStorage.getItem('token');
  //   if (token){
  //     console.log(" token found");
  //     return new HttpHeaders().set(
  //       "Authorization", "Bearer " + token
  //     )
  //   }else {
  //       console.log("Token not found") 
  //   }
  //   return new HttpHeaders;
  // }


  // public auth(username: string, password: string): Observable<any> {
  //   const headers = new HttpHeaders().set('Content-Type', 'Application/json');
  //   console.log("header : " + JSON.stringify(headers));
  //   const body = { username, password };
  
  //   return this.http.post(this.apiUrl + 'api/auth', body, { headers, observe: 'response' }).pipe(
  //     map((res) => {
  //       const authHeader = res.headers.get('authorization');
        
  //       if (authHeader) {
  //         const token = authHeader.substring(7);
  //         const user = res.body;
  
  //         if (token && user) {
  //           console.log("user and token : " + JSON.stringify(user) + token);
  //           return true;
  //         }
  //       }
        
  //       return false;
  //     })
  //   );
  // }

  
}
