import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-github-profile-card',
  templateUrl: './github-profile-card.component.html',
  styleUrls: ['./github-profile-card.component.css']
})
export class GithubProfileCardComponent implements OnInit {

  @Input() user!:User
  constructor() { }

  ngOnInit(): void {
  }

}
