import {WebDriver, Browser, Builder} from 'selenium-webdriver';
import webdriver = require('selenium-webdriver');
import common = require('./test.common');

runSearch();

function search(searchTerm: string, index: number) {
    let driver: WebDriver = null;
    let flow: webdriver.promise.ControlFlow = new webdriver.promise.ControlFlow()
        .on('uncaughtException', (e: Error) => {
            console.log('uncaughtException in flow %d: %s', index, e);
        });

    driver = new Builder().forBrowser(Browser.CHROME)
        .setControlFlow(flow) // Comment out this line to see the difference.
        .build();

    // Position and resize window so it's easy to see them running together.
    driver.manage().window().setSize(600, 400);
    driver.manage().window().setPosition(300 * index, 400 * index);

    common.search(searchTerm, driver);
}

function runSearch() {
    search('webdriver', 0);
    search('nodejs', 1);
    search('selenium', 2);
}
