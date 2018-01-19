import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AlertModule } from 'ngx-bootstrap';
import { ShowdownModule } from 'ngx-showdown';

import { AppComponent } from './app.component';
import { IssueListComponent } from './issue/issue-list.component';
import { IssueService } from './issue.service';
import { IssueComponent } from './issue/issue.component';


@NgModule({
  declarations: [
    AppComponent,
    IssueComponent,
    IssueListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AlertModule.forRoot(),
    ShowdownModule
  ],
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
