import { Component, Input, OnInit } from '@angular/core';
import { Repository } from 'src/app/models/repository';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.css']
})
export class GithubReposComponent implements OnInit {

  @Input() githubRepos:Repository [] =[];

  constructor() { }

  ngOnInit(): void {
  }

}
