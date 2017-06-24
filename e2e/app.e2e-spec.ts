import { DaniPage } from './app.po';

describe('dani App', () => {
  let page: DaniPage;

  beforeEach(() => {
    page = new DaniPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
