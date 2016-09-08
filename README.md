# Typings for Selenium Web Driver
The typescript typings for [Selenium Web Driver](http://www.seleniumhq.org/projects/webdriver/).

[![Build Status](https://travis-ci.org/sfali23/typings-selenium-webdriver.svg?branch=master)](https://travis-ci.org/sfali23/typings-selenium-webdriver)

# Installation notes:

You must install the typings for node 
```
typings install env~node --global --save
```

```
typings install selenium-webdriver  --save
```

# Usage

```
import {WebDriver, Browser, Builder} from 'selenium-webdriver';
import webdriver = require('selenium-webdriver');

let by = webdriver.By;
let until = webdriver.until;

let driver: WebDriver = new Builder().forBrowser(Browser.CHROME).build();
driver.get('http://www.google.com/ncr');
driver.findElement(by.name('q')).sendKeys('webdriver');
driver.findElement(by.name('btnG')).click();
driver.wait(until.titleIs('webdriver - Google Search'), 100000).then(function (result: boolean) {
    setTimeout(function () {
        console.log('Quitting');
        driver.quit();
    }, 10000);
});

```


[More examples](./test)

# License
MIT
