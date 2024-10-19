import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProject, ISkills, IUser } from '../administrateur/model/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class PortfolioService {

  user! : IUser;
  project! : IProject;
  skill! : ISkills;

  private apiUrl = "http://localhost:8085/";


  constructor(
    private http : HttpClient,
    private router: Router
   ) { }


  // DES METHODES POUR CRUD USER !

  
  // list all users :
  public listUsers():Observable<any>{
    // const token = localStorage.getItem('token');  // Retrieve the token stored after login
    // const headers = {
    //   'Authorization': `Bearer ${token}`,  // Attach the JWT token
    //   'Content-Type': 'application/json'   // Set content type
    // };
    // console.log("wselt l headers : " + headers)
    return this.http.get(this.apiUrl+"api/users",
      {headers: this.createAuthorizationHeader()})
  }


  private createAuthorizationHeader(): HttpHeaders{
    console.log("wselt l methode");
    const token = localStorage.getItem('token');
    if (token){
      console.log(" token found");
      return new HttpHeaders().set(
        "Authorization", "Bearer " + token
      )
    }else {
        console.log("Token not found") 
    }
    return new HttpHeaders;
  }


  // create} user :
  public addUser(user : any): Observable<any>{
    return this.http.post(this.apiUrl+ "api/addUser", user);
  }

  // delete user :
  public deleteUser(idUser : number): Observable<any>{
    return this.http.delete(this.apiUrl+ "api/deleteUser/"+ idUser);
  }

  // Authentification :
  public auth(user : any): Observable<any>{
    return this.http.post(this.apiUrl+ "api/auth", user, { responseType: 'text' });
  }

  //Logout
  logout() {
    // Remove the token from localStorage
    localStorage.removeItem('token');
    
    // Optionally clear all localStorage/sessionStorage data
    // localStorage.clear(); // if you want to clear all data
    
    // Navigate back to the login page (or home page)
    this.router.navigateByUrl('/signin'); // Adjust the path to your login route
    alert("are you shur");
  }


  /* 
  // update user :
  public updateUser(idUser : number){
    return this.http.delete(this.apiUrl+ "/deleteUser", idUser);
  }
   */


  // DES METHODES POUR CRUD PROJECT !
  
  // list all projects :
  public listProjects():Observable<any>{
    return this.http.get(this.apiUrl+"projects");
  }

  // create project :
  // public addProject(project : any): Observable<any>{
  //   return this.http.post(this.apiUrl+"createProject", project );
  // }

  // delete project :
  public deleteProject(idProjet : number){
    return this.http.delete(this.apiUrl+ "deleteProject/"+ idProjet);
  }

  // create project :
  public createProject(project : any): Observable<any>{
    return this.http.post(this.apiUrl+ "createProject", project);
  }





  // DES METHODES POUR CRUD Skills !

  // list all users :
  public listSkills():Observable<any>{
    return this.http.get(this.apiUrl+"skills");
  }

  // create skill :
  public addSkill(skill : any): Observable<any>{
    return this.http.post(this.apiUrl+ "addSkills", skill);
  }

  // delete skill :
  public deleteSkill(idSkill : number): Observable<any>{
    return this.http.delete(this.apiUrl+ "deleteSkill/"+ idSkill);
  }

  //get Skill By ID
  public getSkillById(idSkill : number){
    return this.http.get(this.apiUrl + "skills/"+ idSkill);
  }

  // update skill :
  public updateSkill(skill : any) : Observable<any>{
    return this.http.put<any>(this.apiUrl+ "updateSkill/"+ skill.idSkill, skill);
  }




}
