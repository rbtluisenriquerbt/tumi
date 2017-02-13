import { TumiWebPage } from './app.po';

describe('tumi-web App', function() {
  let page: TumiWebPage;

  beforeEach(() => {
    page = new TumiWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
