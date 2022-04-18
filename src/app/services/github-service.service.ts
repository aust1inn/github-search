import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Repository } from '../models/repository';
import { User } from '../models/user';
import { Observable } from 'rxjs/Rx';
import { retry } from 'rxjs-compat/operator/retry';
// import { count } from 'console';
import { catchError, throwError } from 'rxjs';
import { observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {

  user!:User
  repos!:Repository[]
  
  constructor (private http:HttpClient) {
    console.log('kk')
    this.user = new User ("",0,"","",new Date(), new Date(),"")
  }

  // for github profile

  getProfile(searchQuery: string){

  interface ApiResponse {
      bio: string, 
      public_repos: number,
      login:string,
      avatar_url:string, 
      created_at:Date,
      updated_at:Date,
      html_url: string,
  }
    let dataUrl = `https://api.github.com/users/${searchQuery}`;


    let promise = new Promise((resolve:any,reject:any)=>{
      this.http.get<ApiResponse>(dataUrl).toPromise().then((data:any)=>{
        this.user.bio=data.bio;
      this.user.public_repos=data.public_repos;
      this.user.login = data.login;
      this.user.avatar_url=data.avatar_url;
      this.user.created_at=data.created_at;
      this.user.updated_at=data.updated_at;
      this.user.html_url=data.html_url;

        resolve()
      },
      error=>{
        this.user.bio = "UNAVAILABLE"

        reject(error)
      })
    })
    return promise

      
   }

   // for github repos

   getRepos (searchQuery: string) {
     let dataUrl = `https://api.github.com/search/repositories?q=${searchQuery}`

     let myPromise = new Promise((resolve:any,reject:any)=>{
      this.http.get(dataUrl).toPromise().then((response:any)=>{
       

        resolve()
      },
      error=>{
        

        reject(error)
      })
    })
    return myPromise

   }
  }
  



  //  `https://api.github.com/users/${namePassed}?access_token=${environment.githubApi}`
  // `https://api.github.com/users/${searchQuery}/repos?access_token=${environment.githubApi}`

  // https://api.github.com/users/aust1inn
  // https://api.github.com/users/aust1inn/repos

