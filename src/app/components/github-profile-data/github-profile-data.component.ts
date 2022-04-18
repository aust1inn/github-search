import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-github-profile-data',
  templateUrl: './github-profile-data.component.html',
  styleUrls: ['./github-profile-data.component.css']
})
export class GithubProfileDataComponent implements OnInit {

  @Input() user!:User
  constructor() { }

  ngOnInit(): void {
  }

}
