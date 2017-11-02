import { CyberchapterPage } from './app.po';

describe('cyberchapter App', function() {
  let page: CyberchapterPage;

  beforeEach(() => {
    page = new CyberchapterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
