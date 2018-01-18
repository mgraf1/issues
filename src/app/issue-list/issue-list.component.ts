import { Component, OnInit } from '@angular/core';
import { IssueService } from '../issue.service'
import { Issue } from '../models/issue';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {
  private issues: Issue[];

  constructor(private issueService: IssueService) { }

  ngOnInit() {
    this.issueService.getIssuesForLastWeek(new Date()).subscribe(res => {
      this.issues = res;
    });
  }
}
