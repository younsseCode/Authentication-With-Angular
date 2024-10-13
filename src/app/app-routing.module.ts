import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SkillsComponent } from './skills/skills.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { ProjectsComponent } from './projects/projects.component';
import { AdminComponent } from './administrateur/admin/admin.component';
import { ListUsersComponent } from './administrateur/list-users/list-users.component';
import { ProfileComponent } from './administrateur/profile/profile.component';
import { DashboardComponent } from './administrateur/dashboard/dashboard.component';
import { HeaderComponent } from './administrateur/header/header.component';
import { SidebarComponent } from './administrateur/sidebar/sidebar.component';
import { authGuard } from './services/auth.guard'; // Import your function-based AuthGuard
import { AdminProjectsComponent } from './administrateur/admin-projects/admin-projects.component';
import { ListProjectsComponent } from './administrateur/list-projects/list-projects.component';
import { ManageSkillsComponent } from './administrateur/manage-skills/manage-skills.component';

const routes: Routes = [
  { path: '', component: HomeComponent , canActivate: [authGuard] },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent , canActivate: [authGuard] },
  { path: 'navbar', component: NavbarComponent , canActivate: [authGuard] },
  { path: 'home', component: HomeComponent , canActivate: [authGuard] },
  { path: 'projects', component: ProjectsComponent , canActivate: [authGuard] },
  { path: 'skills', component: SkillsComponent , canActivate: [authGuard] },
  { path: 'services', component: ServicesComponent , canActivate: [authGuard] },
  { path: 'portfolio', component: PortfolioComponent , canActivate: [authGuard] },
  { path: 'contactme', component: ContactmeComponent , canActivate: [authGuard] },
  
  { path: 'admin', component: AdminComponent , canActivate: [authGuard] },
  { path: 'header', component: HeaderComponent , canActivate: [authGuard] },
  { path: 'sidebar', component: SidebarComponent , canActivate: [authGuard] },
  { path: 'admin/dashboard', component: DashboardComponent , canActivate: [authGuard] },
  { path: 'admin/list', component: ListUsersComponent , canActivate: [authGuard] },
  { path: 'admin/updateProfile', component: ProfileComponent , canActivate: [authGuard] },
  { path: 'admin/addProject', component: AdminProjectsComponent , canActivate: [authGuard] },
  { path: 'admin/listProjects', component: ListProjectsComponent , canActivate: [authGuard] },
  { path: 'admin/manageSkills', component: ManageSkillsComponent , canActivate: [authGuard] },
  { path: 'admin/manageSkills/:idSkill', component: ManageSkillsComponent , canActivate: [authGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

