import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { NoAuthGuard } from './guards/no-auth-guard/no-auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin', component: SigninComponent, canActivate:[NoAuthGuard]},
  { path: 'signup', component: SignupComponent, canActivate:[NoAuthGuard] },
  { path: 'home', component: HomeComponent },
  // { path: 'admin/dashboard', component: DashboardComponent  },
  // { path: 'user/dashboard', component: DashboardComponent  },

  { path: 'admin',loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule) },
  { path: 'user',loadChildren: () => import("./user/user.module").then(m => m.UserModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

