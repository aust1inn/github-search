import { GithubServiceService } from './../../services/github-service.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css']
})
export class GithubAppComponent implements OnInit {


  public namePassed!:string;
  public githubProfile:any;
  public githubRepos!:any[];
  public errorMessage!:string;
  user!:User

  constructor(private githubService:GithubServiceService ) { }

  searchUser () {
    // to get the github user profile

    // this.githubService.getProfile(this.namePassed).subscribe(data => {
    //   this.githubProfile= data
    // },
    // (error) => {
    //   this.errorMessage = error
    // }
    // )

    // // to get the repository
    // this.githubService.getRepos(this.namePassed).subscribe(data => {
    //   this.githubProfile= data
    // },
    // (error) => {
    //   this.errorMessage = error
    // }
    // )
    // console.log(this.githubRepos)

    this.githubService.getProfile(this.namePassed);
    this.user = this.githubService.user

    console.log(this.user)
  }

  ngOnInit(): void {

  }

}
