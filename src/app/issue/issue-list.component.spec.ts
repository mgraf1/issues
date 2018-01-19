import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueListComponent } from './issue-list.component';
import { IssueService } from '../issue.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ShowdownModule } from 'ngx-showdown';
import { IssueComponent } from './issue.component';

describe('IssueListComponent', () => {
  let component: IssueListComponent;
  let fixture: ComponentFixture<IssueListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        IssueListComponent,
        IssueComponent
      ],
      providers: [ IssueService ],
      imports: [
        HttpModule,
        HttpClientModule,
        ShowdownModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
