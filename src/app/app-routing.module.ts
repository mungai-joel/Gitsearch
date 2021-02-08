import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { RepoComponent } from './repo/repo.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'about', component: AboutComponent },
  { path: 'repo', component: RepoComponent },
  { path: 'navbar', component: NavbarComponent}
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
