import { Repo } from './../repo';
import { environment } from '../../environments/environment';
import { User } from './../user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  newUser: User;
  newRepo: Repo;
  apiKey: string = environment.apiKey;
  //apiUrl = environment.apiKey;

  constructor(private http: HttpClient) {
    this.newUser = new User('', '', '', '', '', '', 0, 0, 0, new Date());
    this.newRepo = new Repo('', '', '', new Date(), '');
  }

  // getting user details from the server
  getUserDetail(username: string) {
    interface Profile {
      url: string;
      name: string;
      email: string;
      login: string;
      html_url: string;
      location: string;
      public_repos: number;
      followers: number;
      following: number;
      avatar_url: string;
      created_at: Date;
    }

    let promise = new Promise((resolve, reject) => {
      this.http
        .get<Profile>(
          environment.apiUrl +
            username +
            '?access_token=' +
            environment.apiKey
        )
        .toPromise()
        .then(
          (response:any) => {
            this.newUser = response;
            //console.log(this.newUser);
            resolve(response);
          },
          (error: any) => {
            console.log(error);
            reject(error);
          }
        );
    });
    return promise;
  }

  // getting repo info from the server

  getRepoDetails(username: string) {
    interface Repos {
      name: string;
      html_url: string;
      description: string;
      language: string;
      created_at: Date;
    }
    let promise = new Promise<void>((resolve, reject) => {
      this.http
        .get<Repos>(
          'https://api.github.com/users/' +
            username +
            '/repos?access_token=' +
            environment.apiKey
        )
        .toPromise()
        .then(
          (results: any) => {
            this.newRepo = results;
            //console.log(results);
            resolve();
          },
          (error: any) => {
            console.log(error);
            reject();
          }
        );
    });
    return promise;
  }
}

// let promise = new Promise((resolve,reject)=>{
//   this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
//     this.quote.quote = response.quote
//     this.quote.author = response.author

//     resolve()
//   },
//   error=>{
//     this.quote.quote = "Never, never, never give up"
//     this.quote.author = "Winston Churchill"

//     reject(error)
//   })
// })
// return promise
// }
// }