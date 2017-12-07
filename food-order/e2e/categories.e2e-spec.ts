import { browser, by, element } from 'protractor';

describe('food-order Categories', function() {
    it('should have categories', function() {
        browser.get('/categories');
        expect(element(by.css('h2')).getText()).toEqual('Categories');
    });
    it('should have items table', function() {
        browser.get('/categories/1');
        expect(element(by.css('h2')).getText()).toEqual('Pizza');
    });
    it('should load list', function() {
        browser.get('/categories');
        expect(element(by.css('mat-table')).getText()).toContain('Drink');
    });
    it('should load details', function() {
        browser.get('/categories/1/items/1');
        expect(element(by.css('h1')).getText()).toEqual('Al Capone');
    });
    
});