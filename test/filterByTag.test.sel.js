/* eslint-disable prefer-arrow-callback, no-var, prefer-template, no-multi-str*/
import webdriver from "selenium-webdriver";
import test from "selenium-webdriver/testing";
import { assert } from "chai";
import filterByTag from "../src/scripts/filterByTag";

const mochaTimeOut = 30000;

test.describe("filterByTag", function () {
  this.timeout(mochaTimeOut);
  test.it("should hide results that doesn't match with given tag", function () {
    const driver = new webdriver.Builder()
          .forBrowser("phantomjs")
          .build();
    const By = webdriver.By;

    driver.get("http://192.168.1.101:8080/");
    driver.executeScript(function () {
      var tag = "foo";

      document.body.innerHTML = "\
        <input type='text' class='header-input' placeholder='filter by tag'/>\
        <article class='result'>\
          <input class='tag' type='text' value=" + tag + " placeholder='tag'>\
          <article class='math-expression'>1+3 &nbsp;= &nbsp;4</article>\
          <button class='delete'>remove</button>\
        </article>";
      this.filterInput = document.querySelector(".header-input");
    });
    driver.executeScript(filterByTag);
    driver.findElement(By.className("header-input")).sendKeys("foo");
    driver.executeScript(function () {
      var result = document.querySelector(".result");

      return result.classList.contains("result-hidden");
    }).then(function (returnedValue) {
      assert.isFalse(returnedValue, "result contains result-hidden class.");
    });
    driver.findElement(By.className("header-input")).sendKeys("bar");
    driver.executeScript(function () {
      var result = document.querySelector(".result");

      return result.classList.contains("result-hidden");
    }).then(function (returnedValue) {
      assert(returnedValue, "result doesn't contain result-hidden class.");
    });
    driver.quit();
  });
});
