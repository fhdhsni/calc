/* eslint-disable prefer-arrow-callback, no-var, prefer-template, no-multi-str*/
import webdriver from "selenium-webdriver";
import test from "selenium-webdriver/testing";
import { assert } from "chai";
import tooltip from "../src/scripts/tooltip";

const mochaTimeOut = 30000;

test.describe("tooltip", function () {
  this.timeout(mochaTimeOut);
  test.it("should show a tooltip on mouseover", function () {
    const driver = new webdriver.Builder()
          .forBrowser("phantomjs")
          .build();
    const By = webdriver.By;

    driver.executeScript(function () {
      document.body.innerHTML = "\
       <div class='right-keys'>\
        <button class='key same-text need-tooltip' data-tooltip='&#10143; sqrt(25)'>sqrt</button>\
        <button class='key nth-root' data-tooltip='&#10143; nthRoot(a, root)'>nthRoot</button>\
      </div>";
      this.nthRoot = document.querySelector(".nth-root");
    });
    driver.executeScript(tooltip);

    // first action for nth-root element
    driver.actions()
      .mouseMove(driver.findElement(By.className("nth-root")))
      .perform();

    driver.sleep(600);
    driver.executeScript(function () {
      return document.querySelector(".nth-root").classList.contains("tooltip");
    }).then(function (returnedValue) {
      assert(returnedValue,
             ".nth-rooth element doesn't get the class tooltip on mouseover.");
    });

    // second action for .right-keys .need-tooltip elements
    driver.actions()
      .mouseMove(driver.findElement(By.className("need-tooltip")))
      .perform();
    driver.sleep(600);
    driver.executeScript(function () {
      return document.querySelector(".need-tooltip").classList.contains("tooltip");
    }).then(function (returnedValue) {
      assert(returnedValue,
             ".right-keys .need-tooltip elements don't get the class tooltip on mouseover.");
    });

    driver.sleep(1300);
    driver.executeScript(function () {
      var returnedValue = {};

      returnedValue.rightKeys =
        document.querySelector(".need-tooltip").classList.contains("tooltip");
      returnedValue.nthRoot =
        document.querySelector(".nth-root").classList.contains("tooltip");

      return returnedValue;
    }).then(function (returnedValue) {
      assert.isFalse(returnedValue.rightKeys,
                     ".right-keys .need-tooltip shouldn't have the class .tooltip after 1200ms.");
      assert.isFalse(returnedValue.nthRoot,
                     ".nthRoot shouldn't have the class .tooltip after 1200ms.");
    });

    driver.quit();
  });
});
