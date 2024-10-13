import { Component, inject, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { IUser } from '../model/User';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent implements OnInit{

  userList : IUser[] = [];

  portfolioService = inject(PortfolioService)
  
  ngOnInit(): void {
    this.portfolioService.listUsers().subscribe((res:any)=>{
      this.userList = res;
    })
    
    this.countUsers;
  }

  get countUsers():number{
    return this.userList.length;
  }

}
