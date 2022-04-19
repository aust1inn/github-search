import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';
import { GithubReposComponent } from './components/github-repos/github-repos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GithubAppComponent } from './components/github-app/github-app.component';
import { GithubProfileDataComponent } from './components/github-profile-data/github-profile-data.component';
import { GithubProfileCardComponent } from './components/github-profile-card/github-profile-card.component';
import { HighlightDirective } from './directives/highlight.directive';
import { DatePipe } from './pipes/date.pipe';


@NgModule({
  declarations: [
    AppComponent,
    GithubProfileComponent,
    GithubReposComponent,
    NavbarComponent,
    GithubAppComponent,
    GithubProfileDataComponent,
    GithubProfileCardComponent,
    HighlightDirective,
    DatePipe,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
