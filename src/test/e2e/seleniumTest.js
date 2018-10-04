function firstEntry(input) {
   console.log(input[1]);
};

function convArrayToInt(array) {
  for(var i=0; i<array.length; i++) {
    array[i] = +array[i];
  }
};

function middleIndex(array, row) {
  var leftTotal = 0;
  const halfTotal = (array.reduce(getSum))/2;
  getLeftTotal(array, row, halfTotal);
};

function getSum(total, num) {
  return total + num;
};

function getLeftTotal(array, row, halfTotal) {
  var leftTotal = 0;
  for(var i=0;leftTotal < halfTotal; i++) {
    if ((leftTotal + array[i]) < halfTotal) {
      leftTotal+= array[i];
    } else {
      break;
    }
  };
  getRightTotal(array, row, leftTotal, i);
};

function getRightTotal(array, row, leftTotal, index) {
  rightTotal = 0;
  for (var i=index+1; i < array.length; i++) {
    rightTotal += array[i];
  }
  checkTotals(leftTotal, rightTotal, index, row);
};

function checkTotals(leftTotal, rightTotal, index, row) {
  if (leftTotal == rightTotal) {
    answers[row-1] = index;
  } else {
    return null;
  }
};

var answers = new Array();
var row1Array = new Array();
var row2Array = new Array();
var row3Array = new Array();
const fullName = "Ammar Arjomand";

const {Builder, By, Key, until} = require('selenium-webdriver');

async function main() {
    let driver = await new Builder()
        .forBrowser('chrome')
        .build();

  await driver.get('localhost:3000')

  const renderChallengeButton = await driver.wait(until.elementLocated(By.xpath('//*[@id="home"]/div/div/button')));
  await renderChallengeButton.click();

  const row1Text = await driver.wait(until.elementLocated(By.xpath('//*[@id="challenge"]/div/div/div[1]/div/div[2]/table/tbody/tr[1]')));
  await row1Text.getText().then(function (text) {
     row1Array = text.split(" ");
     convArrayToInt(row1Array);
  });

  const row2Text = await driver.wait(until.elementLocated(By.xpath('//*[@id="challenge"]/div/div/div[1]/div/div[2]/table/tbody/tr[2]')));
  await row2Text.getText().then(function (text) {
     row2Array = text.split(" ");
     convArrayToInt(row2Array);
  });

  const row3Text = await driver.wait(until.elementLocated(By.xpath('//*[@id="challenge"]/div/div/div[1]/div/div[2]/table/tbody/tr[3]')));
  await row3Text.getText().then(function (text) {
     row3Array = text.split(" ");
     convArrayToInt(row3Array);
  });

  const answer1 = middleIndex(await row1Array, 1);
  const answer2 = middleIndex(await row2Array, 2);
  const answer3 = middleIndex(await row3Array, 3);

  const answer1Field = await driver.wait(until.elementLocated(By.xpath('//*[@id="challenge"]/div/div/div[2]/div/div[1]/div[1]/input')));
  const answer2Field = await driver.wait(until.elementLocated(By.xpath('//*[@id="challenge"]/div/div/div[2]/div/div[1]/div[2]/input')));
  const answer3Field = await driver.wait(until.elementLocated(By.xpath('//*[@id="challenge"]/div/div/div[2]/div/div[1]/div[3]/input')));
  const nameField = await driver.wait(until.elementLocated(By.xpath('//*[@id="challenge"]/div/div/div[2]/div/div[1]/div[4]/input')));
  const submitAnswersButton = await driver.wait(until.elementLocated(By.xpath('//*[@id="challenge"]/div/div/div[2]/div/div[2]/button')));

  await answer1Field.sendKeys(answers[0]);
  await answer2Field.sendKeys(answers[1]);
  await answer3Field.sendKeys(answers[2]);
  await nameField.sendKeys(fullName);
  await submitAnswersButton.click();



  // await driver.quit()



}
main()
