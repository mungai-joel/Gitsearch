import { User } from './../user';
import { Repo } from '../repo';
import { UserServiceService } from '../user-service/service.service'
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  searchUsers = true;

  user?: any;
  repo?: Repo;
  username?: string;

  constructor(
    private userService: UserServiceService,
  ) {}

  getUser(username: string) {
    this.userService.getUserDetail(username).then(
      (results: any) => {
        this.user = this.userService.newUser;
        console.log(results);
      },
      (error: any) => {
        alert('Enter valid username');
        console.log(error);
      }
    );
}
  //   this.repoService.getRepoDetails(username).then(
  //     (results: any) => {
  //       this.repo = this.repoService.newRepo;
  //       console.log(results);
  //     },
  //     (error: any) => {
  //       console.log(error);
  //     }
  //   );
  // }

  ngOnInit() {
    this.getUser('mungai-joel');
  }
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
//}
