import { Component, inject, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/storage-service/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

    localStorage = inject(LocalStorageService);
  
  ngOnInit(): void {
    console.log("user ? : ",this.localStorage.isUserLoggedIn());
    console.log("admin ? : ",this.localStorage.isAdminLoggedIn());
    console.log("token :  ",this.localStorage.getToken());
    console.log("role :  ",this.localStorage.getRole());
    console.log("id  : ",this.localStorage.getUser());

    // throw new Error('Method not implemented.');
  }
  

}
