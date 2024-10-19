import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { IUser } from '../model/User';
import { PortfolioService } from '../../services/portfolio.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent implements OnInit{
  
  searchText: string = '';
  userList : IUser[]=[];
  p: number = 1;

  userList$! : Observable<IUser[]>;
  user! : IUser;

  portfolioService = inject(PortfolioService)


  ngOnInit(): void {
    // this.userList$ = this.portfolioService.listUsers();
    this.getAllUsers();
  }
  

  getAllUsers(){ //oui
    this.portfolioService.listUsers().subscribe((res:any)=>{
      console.log(res);
      this.userList = res;
    })
  }


  handelDeleteUser(idUser: number) {   // oui

    this.portfolioService.deleteUser(idUser).subscribe({
      next: () => {
        // Pour actualiser la liste des artisans après suppression
        alert("user delete succesfully");
        this.getAllUsers();
      },
      error: (err) => {
        console.error("Une erreur s'est produite lors de la suppression de l'user :", err);
      }
    });
  }

}