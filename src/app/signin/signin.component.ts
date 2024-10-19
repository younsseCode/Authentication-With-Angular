import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PortfolioService } from '../services/portfolio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent implements OnInit{

  loginForm! : FormGroup;

  portfolioService = inject(PortfolioService)
  

  constructor(
    private fb : FormBuilder,
    private router: Router // Injecting the Router
  ){ }


  ngOnInit(): void {

    this.loginForm = this.fb.group({
      username:[''],
      password:['']
    })
  
  }

  submitForm(){
    this.portfolioService.auth(this.loginForm.value).subscribe(
      (res)=> {
        console.log(res);
        alert(res);
        if(res != null){
          const token = res;
          localStorage.setItem('token',token);
          this.router.navigateByUrl('admin/dashboard');
        }
      }
    )
  }

  
}
