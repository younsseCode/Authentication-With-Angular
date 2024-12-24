import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { userInfo } from 'node:os';
import { AuthService } from '../services/auth-service/auth.service';
import { LocalStorageService } from '../services/storage-service/local-storage.service';
import { error } from 'node:console';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent implements OnInit {
  loginForm!: FormGroup;
  isSpinning: boolean = false; // Declare the property here

  authService = inject(AuthService);
  localStorage = inject(LocalStorageService);

  constructor(
    private fb: FormBuilder,
    private router: Router // Injecting the Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [''],
      password: [''],
    });

    console.log(this.loginForm.value)
  }

  submitForm() {
    this.isSpinning = true; // Show spinner when the form is submitted
    // const email = this.loginForm.get('email')?.value;
    // const password = this.loginForm.get('password')?.value;

    this.authService
      .signin(
        this.loginForm.get(['email'])!.value,
        this.loginForm.get(['password'])!.value
      )
      .subscribe((res: any) => {
        console.log(res);
        this.isSpinning = false;
        if (this.localStorage.isAdminLoggedIn()) {
          this.router.navigateByUrl("/admin/dashboard");
        } else if (this.localStorage.isUserLoggedIn()) {
          this.router.navigateByUrl("/user/dashboard");
        } else {
          alert('you are not logged in, please login first');
          
        }
      },
      (err: any) => {
        console.error(err); // Handle any errors
        this.isSpinning = false; // Ensure spinner stops even on error
      }
    );
  }
}

// this.router.navigateByUrl('home');

// if(res != null){

//   const token = res.token;
//   const role = res.role;
//   const userId = res.userId;

//   // console.log(res.token);
//   // console.log(res.role);
//   // console.log(res.userId);

//   localStorage.setItem('role',role);
//   localStorage.setItem('userId',userId);
//   localStorage.setItem('token',token);
// }
