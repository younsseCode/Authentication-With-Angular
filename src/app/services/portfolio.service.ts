import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
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
    return this.http.get(this.apiUrl+"api/users");
  }


    // create} user :
  public addUser(user : any): Observable<any>{
    return this.http.post(this.apiUrl+ "api/addUser", user);
  }


    // Authentification :
    public auth(user : any): Observable<any>{
      return this.http.post(this.apiUrl+ "api/auth", user, { responseType: 'text' });
    }

    //Logout
    logout() {
      // Remove the token from localStorage
      localStorage.removeItem('jwt');
      
      // Optionally clear all localStorage/sessionStorage data
      // localStorage.clear(); // if you want to clear all data
      
      // Navigate back to the login page (or home page)
      this.router.navigateByUrl('/signin'); // Adjust the path to your login route
      alert("are you shur");
    }

  // delete user :
  public deleteUser(idUser : number): Observable<any>{
    return this.http.delete(this.apiUrl+ "api/deleteUser/"+ idUser);
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

    // create} project :
  public addProject(project : any): Observable<any>{
    return this.http.post(this.apiUrl+ "api/project/addProject", project);
  }


    // delete user :
    public deleteProject(idProjet : number){
      return this.http.delete(this.apiUrl+ "api/project/deleteProject/"+ idProjet);
    }





  // DES METHODES POUR CRUD Skills !

  // list all users :
  public listSkills():Observable<any>{
    return this.http.get(this.apiUrl+"skills");
  }

  // create} project :
  public addSkill(skill : any): Observable<any>{
    return this.http.post(this.apiUrl+ "addSkills", skill);
  }

  // delete skill :
  public deleteSkill(idSkill : number): Observable<any>{
    return this.http.delete(this.apiUrl+ "deleteSkill/"+ idSkill);
  }


   // update skill :
   public updateSkill(idSkill : number){
    return this.http.put(this.apiUrl+ "updateSkill/",idSkill);
  }

  

}
