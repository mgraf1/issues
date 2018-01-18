import { Component, OnInit } from '@angular/core';
import { IssueService } from '../issue.service'

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  constructor(private issueService: IssueService) { }

  ngOnInit() {
  }

}
