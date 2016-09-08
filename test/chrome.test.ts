import chrome = require('selenium-webdriver/chrome');
import webdriver = require('selenium-webdriver');
import {Browser} from 'selenium-webdriver';
import path = require('path');

let by = webdriver.By;
let until = webdriver.until;

const log_file = '.' + path.sep + Browser.CHROME + '.log';
const drivers_dir = './server/drivers';
const driver_extension = process.platform === 'win32' ? '.exe' : '';
const driver_exe = drivers_dir + path.sep + 'chromedriver' + driver_extension;

let service = new chrome.ServiceBuilder(driver_exe).loggingTo(log_file).enableVerboseLogging().build();

let options = new chrome.Options();
options.addArguments('start-maximized');

let driver = new chrome.Driver(options, service);

driver.get('http://www.google.com/ncr');
driver.findElement(by.name('q')).sendKeys('webdriver');
driver.findElement(by.name('btnG')).click();
driver.wait(until.titleIs('webdriver - Google Search'), 100000).then(function (result: boolean) {
    setTimeout(function () {
        console.log('Quiting');
        driver.quit();
    }, 10000);
});
