import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { GithubService } from '../../../../core/models';
import { repos } from '../../../../core/models';


@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss']
})
export class RepoListComponent {

  userName: string = 'angular';
  repos: repos[];

  loading: boolean = false;
  errorMessage: string = '';

  constructor(private githubService: GithubService) {

  }

  public getRepos() {
    this.loading = true;
    this.errorMessage = "";
    this.githubService.getRepos(this.userName)
        .subscribe((response) => {this.repos=response;},
        (error) => { this.errorMessage = error;
                     this.loading = false; },
        () => { this.loading = false; });
  }
}
