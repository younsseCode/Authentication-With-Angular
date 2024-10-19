import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PortfolioService } from '../../services/portfolio.service';
import { ISkills } from '../model/User';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-skills',
  templateUrl: './manage-skills.component.html',
  styleUrl: './manage-skills.component.css'
})
export class ManageSkillsComponent implements OnInit{

  addSkillForm! : FormGroup;
  varInput : string = '';
  defaultInput : string = 'write anything her ...';
  idSkill! : number;

  portfolioService = inject(PortfolioService)
  constructor( private fb : FormBuilder,
               private router : Router ){ }


  ngOnInit(): void {

    this.getAllSkills();

    this.addSkillForm = this.fb.group({
      idSkill:[''],
      nameSkill:['']
    })   
    
  }
  
  submitForm(){
    console.log(this.addSkillForm.value);
    this.portfolioService.addSkill(this.addSkillForm.value).subscribe(
      (res)=>
      {
        if (res.idSkill != null){
          this.getAllSkills();

          this.addSkillForm = this.fb.group({
            nameSkill:['']
          })  
        }
      }
    )
  }





  //liste Skills

  searchText: string = '';
  skillList : ISkills[]=[];
  p: number = 1;

  skillList$! : Observable<ISkills[]>;
  skill! : ISkills;



  getAllSkills(){ //oui
    this.portfolioService.listSkills().subscribe((res:any)=>{
      this.skillList = res;
    })
  }


  handelDeleteSkill(idSkill: number) {   // oui

    this.portfolioService.deleteSkill(idSkill).subscribe({
      next: () => {
        // Pour actualiser la liste des artisans après suppression
        alert("skill delete succesfully");
        this.getAllSkills();
      },
      error: (err) => {
        console.error("error at the delete : ", err);
      }
    });
  }


  openUpdateForm(idSkill: number) {
    this.router.navigateByUrl("admin/updateSkill/"+ idSkill)
    console.log("to : " + idSkill);
  }

}
