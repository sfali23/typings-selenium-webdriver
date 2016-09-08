/// <reference path="../typings/index.d.ts" />
/// <reference path="./bundle.d.ts" />

import {WebDriver, Browser} from 'selenium-webdriver';
import {Options as ChromOptions} from 'selenium-webdriver/chrome';
import webdriver = require('selenium-webdriver');
import common = require('./test.common');

let options = new ChromOptions();
options.addArguments("start-maximized");

let driver: WebDriver = new webdriver.Builder().forBrowser(Browser.CHROME).setChromeOptions(options).build();
common.search('webdriver', driver);
