/// <reference path="../typings/index.d.ts" />
/// <reference path="./bundle.d.ts" />

import {WebDriver, Browser} from 'selenium-webdriver';
import webdriver = require('selenium-webdriver');

let by = webdriver.By,
    until = webdriver.until;

let driver: WebDriver = new webdriver.Builder().forBrowser(Browser.CHROME).usingServer('http://localhost:4444/wd/hub').build();

driver.get('http://www.google.com/ncr');
driver.findElement(by.name('q')).sendKeys('webdriver');
driver.findElement(by.name('btnG')).click();
driver.wait(until.titleIs('webdriver - Google Search'), 100000).then(function (result: boolean) {
    setTimeout(function () {
        console.log("Quiting");
        driver.quit();
    }, 10000);
});
