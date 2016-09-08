import {WebDriver, Browser} from 'selenium-webdriver';

import webdriver = require('selenium-webdriver');
import common = require('./test.common');

let logging = webdriver.logging;
logging.installConsoleHandler();
logging.getLogger('webdriver.http').setLevel(logging.Level.ALL);

let driver: WebDriver = new webdriver.Builder().forBrowser(Browser.CHROME).build();
common.search('webdriver', driver);
