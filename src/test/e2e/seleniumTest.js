// var webdriver = require('selenium-webdriver');
// var driver = new webdriver.Builder()
//                 .withCapabilities(webdriver.Capabilities)
//                 .chrome().build();
//
// driver.get('localhost:3000');


require('chromedriver');
var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();



// var driver = new webdriver.Builder().build();
driver.get('http://www.google.com');

var element = driver.findElement(webdriver.By.name('q'));
element.sendKeys('Cheese!');
element.submit();

driver.getTitle().then(function(title) {
  console.log('Page title is: ' + title);
});

driver.wait(function() {
  return driver.getTitle().then(function(title) {
    return title.toLowerCase().lastIndexOf('cheese!', 0) === 0;
  });
}, 3000);

driver.getTitle().then(function(title) {
  console.log('Page title is: ' + title);
});

driver.quit();
