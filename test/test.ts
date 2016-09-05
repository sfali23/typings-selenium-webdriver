/// <reference path="../typings/index.d.ts" />
/// <reference path="./bundle.d.ts" />

import {WebDriver, Browser, By} from 'selenium-webdriver';
import webdriver = require('selenium-webdriver');

let driver: WebDriver = new webdriver.Builder().forBrowser(Browser.CHROME).build();

let until = webdriver.until;

driver.get('http://www.google.com/ncr');
driver.findElement(By.name('q')).sendKeys('webdriver');
driver.findElement(By.name('btnG')).click();
driver.wait(until.titleIs('webdriver - Google Search'), 1000);
driver.quit();
