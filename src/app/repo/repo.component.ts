import { Repo } from './../repo';
import { UserServiceService } from '../user-service/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  searchUsers = true;

  repo?: Repo;
  reponame?: string;

  constructor(private repoService: UserServiceService) {}

  search(reponame: any) {
    this.repoService.getRepoDetails(reponame).then(
      (results: any) => {
        this.repo = this.repoService.newRepo;
        console.log(results);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {}
}