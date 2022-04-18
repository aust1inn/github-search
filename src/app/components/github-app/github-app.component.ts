import { GithubServiceService } from './../../services/github-service.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Repository } from 'src/app/models/repository';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css']
})
export class GithubAppComponent implements OnInit {


  public namePassed!:string;
  user!:User
  githubRepos!:any

  constructor(private githubService:GithubServiceService ) { }

  searchUser () {
    

    this.githubService.getProfile(this.namePassed);
    this.user = this.githubService.user

    this.githubService.getRepos(this.namePassed);
    this.githubRepos=this.githubService.repo_items;

    console.log(this.githubRepos)
    console.log(this.user)
  }

  ngOnInit(): void {

  }

}
