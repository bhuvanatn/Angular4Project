import { MyfirstAngular4AppPage } from './app.po';

describe('myfirst-angular4-app App', () => {
  let page: MyfirstAngular4AppPage;

  beforeEach(() => {
    page = new MyfirstAngular4AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
