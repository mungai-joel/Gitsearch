import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserServiceService } from './user-service/service.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { RepoComponent } from './repo/repo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './user/user.component';
import { UnderlineDirective } from './underline.directive';
import { DateCountPipe } from './date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SearchFormComponent,
    RepoComponent,
    NavbarComponent,
    UserComponent,
    UnderlineDirective,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
