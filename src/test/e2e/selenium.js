var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

driver.get('localhost:3000');

var renderChallengeButton = driver.findElement(By.xpath('//*[@id="home"]/div/div/button'));

renderChallengeButton.click();
