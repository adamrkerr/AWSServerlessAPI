import { AwsWebAppPage } from './app.po';

describe('aws-web-app App', () => {
  let page: AwsWebAppPage;

  beforeEach(() => {
    page = new AwsWebAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
