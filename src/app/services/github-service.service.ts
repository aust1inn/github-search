import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { count } from 'console';
// import { retry } from 'rxjs-compat/operator/retry';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {

  users = new BehaviorSubject<any>([]);


  constructor(private http:HttpClient) { 

  }

  
     public getUser () {

        const url = "https://api.github.com/users"
        return this.http.get(url).subscribe((response:any) => {
        })
      }

    // for github repositories
    
}
