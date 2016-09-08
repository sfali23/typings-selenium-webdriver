import chrome = require('selenium-webdriver/chrome');
import webdriver = require('selenium-webdriver');
import common = require('./test.common');

let options = new chrome.Options();

options.setMobileEmulation({deviceName: 'Google Nexus 5'});

let driver = new webdriver.Builder().forBrowser(webdriver.Browser.CHROME).setChromeOptions(options).build();
common.search('webdriver', driver);
