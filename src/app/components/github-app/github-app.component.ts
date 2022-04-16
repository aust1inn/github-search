import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from 'src/app/services/github-service.service';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css']
})
export class GithubAppComponent implements OnInit {

  public githubUserQuery!:string;
  constructor(private githubService:GithubServiceService) { }

  // searchUser () {
  //   this.githubService.getUser();
  //   console.log('ss')
  // }
  ngOnInit(): void {
    this.githubService.getUser()
  }

}
