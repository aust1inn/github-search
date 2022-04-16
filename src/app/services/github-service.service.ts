import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Repository } from '../models/repository';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {

user!:User;
newRepo:any
repo!:Repository;
searchRepo: any;


  constructor(private http:HttpClient) { 
    this.user = new User ("",0,"","",new Date(),new Date(),"");
    this.repo = new Repository("","","",new Date(),"","","",new Date()); 
  }

  
     public getUser (namePassed: string) {

      interface ApiResponse{
        bio:string,
        public_repos:number,
        login:string,
        avatar_url:string,
        created_at:Date, 
        updated_at:Date,
        name:string,
        fullName:string, 
        html_url:string   
    }

    const promise = new Promise<void> ((resolve) => {
      this.http.get<ApiResponse>('https://api.github.com/users/' + namePassed + '?access_token=' + environment.githubApi).toPromise().then((getResponse:any) => {
          this.user.bio = getResponse.name;
          this.user.htmlUrl = getResponse.html_url;
          this.user.login = getResponse.login;
          this.user.avatarUrl = getResponse.avatar_url;
          this.user.publicRepos = getResponse.public_repos;
          this.user.createdAt = getResponse.created_at;
          resolve();
      },);

  });
  return promise;

      }

      gitUserRepos(searchMe:string) {
        interface ApiResponse {
            name: string;
            description: string;
            created_at: Date;
        }

        const myPromise = new Promise<void>((resolve, reject) => {
            this.http.get<ApiResponse>('https://api.github.com/users/' + searchMe + '/repos?order=created&sort=asc?access_token=' + environment.githubApi).toPromise().then(getRepoResponse => {
                this.newRepo = getRepoResponse;
                resolve();
            }, error => {
                reject(error);
            });
        });
        return myPromise;
    }


    gitRepos(namePassed:string) {
        interface ApiResponse {
            items: any;
        }

        const promise = new Promise<void>((resolve, reject) => {
            this.http.get<ApiResponse>('https://api.github.com/search/repositories?q=' + namePassed + ' &per_page=10 ' + environment.githubApi).toPromise().then((getRepoResponse:any) => {
                this.searchRepo = getRepoResponse.items;
                console.log(getRepoResponse)
                resolve();
            }, err => {
                this.searchRepo = 'error';
                reject(err);
            });
        });
        return promise;
    }
}

