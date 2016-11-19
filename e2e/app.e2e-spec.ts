import { PspfPage } from './app.po';

describe('pspf App', function() {
  let page: PspfPage;

  beforeEach(() => {
    page = new PspfPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
