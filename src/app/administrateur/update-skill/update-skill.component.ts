import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PortfolioService } from '../../services/portfolio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ISkills } from '../model/User';

@Component({
  selector: 'app-update-skill',
  templateUrl: './update-skill.component.html',
  styleUrl: './update-skill.component.css'
})
export class UpdateSkillComponent implements OnInit{

  idSkill! : number;
  updateSkillForm! : FormGroup;

  constructor( private portfolioService : PortfolioService,
               private activatedRoute : ActivatedRoute,
               private fb : FormBuilder,
               private router : Router  ){ }

  ngOnInit(): void {
    this.idSkill = this.activatedRoute.snapshot.params['idSkill'];

    this.portfolioService.getSkillById(this.idSkill).subscribe({
      next : (data:any)=>{
        this.updateSkillForm = this.fb.group({
          idSkill : this.fb.control(data.idSkill),
          nameSkill : this.fb.control(data.nameSkill)
        })

        },
      error : error =>{ console.log(error); }
    });
  }


  updateSkill(){
    let skill : ISkills = this.updateSkillForm.value;
    this.portfolioService.updateSkill(skill).subscribe({
      next : (data) =>{
        alert("updated succesful");
        this.router.navigateByUrl("admin/manageSkills");
      }
    });
  }

}
