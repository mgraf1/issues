import { AppPage } from './app.po';

describe('issues App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('This Week\'s Angular Issues');
  });
});
