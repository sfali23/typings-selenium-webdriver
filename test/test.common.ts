import {WebDriver} from 'selenium-webdriver';
import webdriver = require('selenium-webdriver');

let by = webdriver.By,
    until = webdriver.until;

export function search(searchTerm: string, driver: WebDriver) {
    driver.get('http://www.google.com/ncr');
    driver.findElement(by.name('q')).sendKeys(searchTerm);
    driver.findElement(by.name('btnG')).click();
    let title: string = searchTerm + " - Google Search";
    driver.wait(until.titleIs(title), 100000).then(function (result: boolean) {
        setTimeout(function () {
            console.log("Quiting");
            driver.quit();
        }, 10000);
    });
}