import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.css'
})
export class CreateProjectComponent implements OnInit{


  // public files: NgxFileDropEntry[] = [];

  saveProjectForm! : FormGroup;
  portfolioService = inject(PortfolioService)

  constructor( private fb : FormBuilder ){ }

  ngOnInit(): void {
    this.saveProjectForm = this.fb.group({
      idProjet:[''],
      nomProjet:[''],
      description:[''],
      photo:[''],
      dateProjet:['']
    })
  }
  
  

  submitForm(){
    console.log(this.saveProjectForm.value);
    this.portfolioService.createProject(this.saveProjectForm.value).subscribe(
      (res)=>
      {
        if (res.idProjet != null){
          alert("Hello "+ res.nomProjet);
          
        }
      }
    ) 
  }




}
