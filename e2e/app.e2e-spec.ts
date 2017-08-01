import { Angular4WebAppPage } from './app.po';

describe('angular4-web-app App', () => {
  let page: Angular4WebAppPage;

  beforeEach(() => {
    page = new Angular4WebAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
