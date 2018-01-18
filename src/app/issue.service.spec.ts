import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { IssueService } from './issue.service';

describe('IssueService', () => {
  let issueService: IssueService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        HttpClientModule
      ],
      providers: [ IssueService ]
    });

    issueService = TestBed.get(IssueService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', inject([IssueService], (service: IssueService) => {
    expect(service).toBeTruthy();
  }));

  describe('getIssuesForLastWeek', () => {
    it('should call httpClient with the correct issues url', () => {
      let date = new Date(2017, 1, 10);
      issueService.getIssuesForLastWeek(date).subscribe(res => {});
      httpMock.expectOne('https://api.github.com/repos/angular/angular/issues?since=2017-02-03T00:00:00.000Z');
    });
  });
});
