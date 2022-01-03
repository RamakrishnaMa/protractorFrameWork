let homepage = require('../pages/homepage.js')

describe('demo calculator tests', function () {
    it('addition test', function () {
        // browser.get('http://juliemr.github.io/protractor-demo/');
        homepage.get('http://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNumber('6');
        homepage.enterSecondNumber('6');
        homepage.clickGo();
        homepage.verifyResult('12');

        //   element(by.model('first')).sendKeys('2');
        //   element(by.model('second')).sendKeys('2');
        //   element(by.css('[ng-click="doAddition()"]')).click();
        //   let result = element(by.cssContainingText('.ng-binding', '4'));
        //   expect(result.getText()).toEqual('4');


        browser.sleep(3000);

    });
    it('subtraction test', function () {
        // browser.get('http://juliemr.github.io/protractor-demo/');
        homepage.get('http://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNumber('6');
        homepage.enterSecondNumber('6');
        homepage.clickGo();
        homepage.verifyResult('1');

        //   element(by.model('first')).sendKeys('2');
        //   element(by.model('second')).sendKeys('2');
        //   element(by.css('[ng-click="doAddition()"]')).click();
        //   let result = element(by.cssContainingText('.ng-binding', '4'));
        //   expect(result.getText()).toEqual('4');


        browser.sleep(3000);

    });
});