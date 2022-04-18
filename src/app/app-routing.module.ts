import { GithubAppComponent } from './components/github-app/github-app.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GithubReposComponent } from './components/github-repos/github-repos.component';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';

const routes: Routes = [

  {path:'users' ,component: GithubAppComponent},
  {path:'repos' ,component:GithubReposComponent},
  {path: '', redirectTo: '/users', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
