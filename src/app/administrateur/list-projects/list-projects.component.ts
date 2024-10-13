import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { IProject } from '../model/User';
import { PortfolioService } from '../../services/portfolio.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrl: './list-projects.component.css'
})
export class ListProjectsComponent implements OnInit {
  
  searchText: string = '';
  projectsList : IProject[]=[];
  projectsList$! : Observable<IProject[]>;
  project! : IProject;
  
  p: number = 1;

  // http = inject(HttpClient)
  portfolioService = inject(PortfolioService)

  constructor(){

  }


  ngOnInit(): void {
    this.getAllProjects();
  }
  
  getAllProjects() {
    this.portfolioService.listProjects().subscribe((res:any)=>{
      this.projectsList = res;
      console.log(res);
    })
  }

  handelDeleteProject(idProject : number) {   // oui
    this.portfolioService.deleteProject(idProject).subscribe({
      next: () => {
        // Pour actualiser la liste des artisans après suppression
        alert("project delete succesfully");
        this.getAllProjects();
      },
      error: (err) => {
        console.error("Une erreur s'est produite lors de la suppression de l'Project :", err);
      }
    });
  }

  }
  

