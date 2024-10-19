import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxFileDropModule } from 'ngx-file-drop';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { DashboardComponent } from './administrateur/dashboard/dashboard.component';
import { HeaderComponent } from './administrateur/header/header.component';
import { SidebarComponent } from './administrateur/sidebar/sidebar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchFilterPipe } from './search-filter.pipe';
import { ProfileComponent } from './administrateur/profile/profile.component';
import { AdminProjectsComponent } from './administrateur/admin-projects/admin-projects.component';
import { ListProjectsComponent } from './administrateur/list-projects/list-projects.component';
import { ManageSkillsComponent } from './administrateur/manage-skills/manage-skills.component';
import { UpdateSkillComponent } from './administrateur/update-skill/update-skill.component';
import { CreateProjectComponent } from './administrateur/create-project/create-project.component';
import { authInterceptor } from './services/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SigninComponent,
    SignupComponent,
    SkillsComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactmeComponent,
    ProjectsComponent,
    AdminComponent,
    ListUsersComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    SearchFilterPipe,
    ProfileComponent,
    AdminProjectsComponent,
    ListProjectsComponent,
    SkillsComponent,
    ManageSkillsComponent,
    UpdateSkillComponent,
    CreateProjectComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxFileDropModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([authInterceptor]))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
