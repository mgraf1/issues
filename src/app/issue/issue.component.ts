import { Component } from '@angular/core';
import { Issue } from '../models/issue';
import { Input } from '@angular/core';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html'
})
export class IssueComponent {

  @Input() public issue: Issue;

}
