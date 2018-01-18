import { User } from './user';

export class Issue {
  title: string;
  body: string;
  user: User;
  assignee: User;
}