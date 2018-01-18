import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Issue } from './models/issue';

@Injectable()
export class IssueService {

  constructor(private http: HttpClient) { }

  getIssuesForLastWeek(date: Date): Observable<Issue[]> {
    const url = this.getIssuesUrl(date);
    return this.http.get<Issue[]>(url);
  }

  private getIssuesUrl(date: Date): string {
    let copiedDate = new Date(date.getTime());

    let dayOfMonth = copiedDate.getDate();
    copiedDate.setDate(dayOfMonth - 7);

    let tzoffset = copiedDate.getTimezoneOffset() * 60000; //offset in milliseconds
    let isoTime = (new Date(copiedDate.getTime() - tzoffset)).toISOString();

    return `https://api.github.com/repos/angular/angular/issues?since=${isoTime}`;
    //return 'xxx';
  }

}
