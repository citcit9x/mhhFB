import { MhhFBPage } from './app.po';

describe('mhh-fb App', () => {
  let page: MhhFBPage;

  beforeEach(() => {
    page = new MhhFBPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
