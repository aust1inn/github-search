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
    let dataUrl = `https://api.github.com/users/${searchQuery}?access_token=${environment.githubApi}`;


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

    










  //   return this.http.get<any>(dataUrl).pipe(

  //     // retry(count: 1),
  //     catchError(this.handleErrors)
  //   );
  // }

  // // for github repos

  // public getRepos(searchQuery: string){
  //   let dataUrl = `https://api.github.com/users/${searchQuery}/repos?access_token=${environment.githubApi}`;

  //   return this.http.get<any[]>(dataUrl).pipe(

  //     // retry(count: 1),
  //     catchError(this.handleErrors)
  //   );
  // }

  // public handleErrors (error:HttpErrorResponse) {
  //   let errorMessage:string;
  //   if (error.error instanceof ErrorEvent) {
  //     // client side error
  //     errorMessage = `MESSAGE: ${error.error.message}`
  //   }
        
  //     else {
  //     // server side error
  //      errorMessage =`STATUS: ${error.status} MESSAGE : ${error.message}` 
  //   }
  //     return throwError(errorMessage);
   }

   

  }
  



  //  `https://api.github.com/users/${namePassed}?access_token=${environment.githubApi}`
  // `https://api.github.com/users/${searchQuery}/repos?access_token=${environment.githubApi}`

  // https://api.github.com/users/aust1inn
  // https://api.github.com/users/aust1inn/repos

