import { User } from './../user';
import { Repo } from '../repo';
import { UserServiceService } from '../user-service/service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  searchUsers = true;

  user?: any;
  repository?: any;
  username?: any;

  constructor(
    private userService: UserServiceService,
  ) {this.userService.getRepoDetails(this.username).then(newRepo=>{
    this.repository=newRepo
  })}

  getUser(username: any) {
    this.userService.getUserDetail(username).then(
      (results: any) => {
        this.user = this.userService.newUser;
        console.log(results);
      },
      (error) => {
        alert('Enter valid username');
        console.log(error);
      }
    );
  }
  getRepo(username: string) {
    this.userService.getRepoDetails(username).then(
      (results) => {
        this.repository = this.userService.newRepo;
        console.log(results);
      },
      (error) => {
        console.log(error);
      }
    );
  }

 
ngOnInit() {
this.getUser('mungai-joel');
this.getRepo('mungai-joel');
}

//getUser() {
//this.userService.getUserDetails();
//this.user = this.userService.user;

// this.userService.getRepoDetails(this.username);
// this.repo = this.userService.repo;
// console.log(this.repo);
//}

//  this.searchUsers = !this.searchUsers;
//}

// ngOnInit() {
// this.userService.getUserDetails('mungai-joel');
//this.user = this.userService.user;

//this.userService.getRepos(mungai-joel);
//this.repo = this.userService.repo;
//}
}
