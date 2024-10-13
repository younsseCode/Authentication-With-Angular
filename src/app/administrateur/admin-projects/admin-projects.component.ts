import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PortfolioService } from '../../services/portfolio.service';
// import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';

// import { cloneDeep } from 'lodash';
// import Dropzone from 'dropzone';


@Component({
  selector: 'app-admin-projects',
  templateUrl: './admin-projects.component.html',
  styleUrl: './admin-projects.component.css'
})
export class AdminProjectsComponent  implements OnInit{


  // public files: NgxFileDropEntry[] = [];

  saveProjectForm! : FormGroup;
  portfolioService = inject(PortfolioService)

  constructor( private fb : FormBuilder ){ }

  ngOnInit(): void {
    this.saveProjectForm = this.fb.group({
    nomProjet:[''],
    description:[''],
    photo:[''],
    dateProjet:['']
    })
  }
  
  // onFileChange(event: any) {
  //   const file = (event.target as HTMLInputElement).files?.[0];
  //   if (file) {
  //     this.saveProjectForm.patchValue({
  //       photo: file
  //     });
  //     this.saveProjectForm.get('photo')?.updateValueAndValidity();
  //   }
  // }

  submitForm(){
     console.log(this.saveProjectForm.value);
    this.portfolioService.addProject(this.saveProjectForm.value).subscribe(
      (res)=>
      {
        if (res.idProjet != null){
          alert("Hello "+ res.nomProjet);
        }
      }
    ) 
  }




}
