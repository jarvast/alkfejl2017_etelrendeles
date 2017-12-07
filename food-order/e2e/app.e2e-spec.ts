import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('food-order App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to FoodOrder!');
  });    
  it('should display paragraph ', () => {
    page.navigateTo();
    expect(element(by.css('p')).getText()).toEqual('Please login or register!');
  });
  it('should load popular list ', () => {
    page.navigateTo();
    expect(element(by.css('app-top10-list')).getText()).toContain('The most popular items');
  });
});
