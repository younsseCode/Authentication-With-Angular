import { Component, inject, OnInit } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {

  registerForm! : FormGroup;
  
  portfolioService = inject(PortfolioService)
  constructor(
    private fb : FormBuilder
  ){ }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstname:[''],
      lastname:[''],
      username:[''],
      email:[''],
      password:['']
    })    
  }
  
  submitForm(){
    console.log(this.registerForm.value);
    this.portfolioService.addUser(this.registerForm.value).subscribe(
      (res)=>
      {
        if (res.idUser != null){
          alert("Hello "+ res.firstname);
        }
      }
    )
  }



}
