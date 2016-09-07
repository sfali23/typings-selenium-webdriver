import chrome = require('selenium-webdriver/chrome');
import webdriver = require('selenium-webdriver');
import {Browser} from 'selenium-webdriver';
import fs = require('fs');
import path = require('path');

let by = webdriver.By,
    until = webdriver.until;

const base_path = getUserHome() + path.sep + ".webdriver";
const log_file = base_path + path.sep + Browser.CHROME + ".log";

let service = new chrome.ServiceBuilder().loggingTo(log_file).enableVerboseLogging().build();

let options = new chrome.Options();
options.addArguments("start-maximized");

let driver = new chrome.Driver(options, service);

driver.get('http://www.google.com/ncr');
driver.findElement(by.name('q')).sendKeys('webdriver');
driver.findElement(by.name('btnG')).click();
driver.wait(until.titleIs('webdriver - Google Search'), 100000).then(function (result: boolean) {
    setTimeout(function () {
        console.log("Quiting");
        driver.quit();
    }, 10000);
});

function getUserHome() {
    return process.env.HOME || process.env.USERPROFILE;
}