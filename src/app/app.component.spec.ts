import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { IssueListComponent } from './issue/issue-list.component';
import { IssueService } from './issue.service';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ShowdownModule } from 'ngx-showdown';
import { IssueComponent } from './issue/issue.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        IssueListComponent,
        IssueComponent
      ],
      providers: [
        IssueService,
        HttpClient
      ],
      imports: [
        HttpModule,
        HttpClientModule,
        ShowdownModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
});
