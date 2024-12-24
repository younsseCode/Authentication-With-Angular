import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth-service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {

  registerForm! : FormGroup;
  
  authService = inject(AuthService)
  constructor(
    private fb : FormBuilder
  ){ }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstname:[''],
      lastname:[''],
      email:[''],
      password:['']
    })    
  }
  
  submitForm(){
    console.log(this.registerForm.value);
    this.authService.signup(this.registerForm.value).subscribe(
      (res)=>
      {
        if (res.idUser != null){
          alert("Hello "+ res.firstname);
        }
      }
    )
  }

  
}
