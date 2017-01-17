/* eslint-disable prefer-arrow-callback */
import { assert } from "chai";
import sinon from "sinon";
import { setStorage, useStorage } from "../src/scripts/storage";

describe("setStorage and useStorage", function () {
  let userCalcHistory;

  beforeEach(function () {
    const tag1 = "foo";
    const tag2 = "bar";
    const mathExpression1 = "sqrt(9)  =  3";
    const mathExpression2 = "3*3  =  9";

    userCalcHistory = [
      {
        tag: tag1,
        mathExpression: mathExpression1,
      },
      {
        tag: tag2,
        mathExpression: mathExpression2,
      },
    ];

    document.body.innerHTML = `
        <div class="result-wrapper">
          <article class="result">
            <input class="tag" type="text" value="${tag1}" placeholder="tag">
            <article class="math-expression">${mathExpression1}</article>
            <button class="delete">remove</button>
          </article>
          <article class="result">
            <input class="tag" type="text" value=${tag2} placeholder="tag">
            <article class="math-expression">${mathExpression2}</article>
            <button class="delete">remove</button>
          </article>
        </div>`;
    setStorage();
  });

  describe("setStorage", function () {
    it("should read all .result elements and save them in localStorage", function () {
      const storedData = JSON.parse(localStorage.userCalcHistory);

      assert.sameDeepMembers(storedData, userCalcHistory,
                             "stored data in localStroage is not equal to given data");
    });
  });


  describe("useStorage", function () {
    it("should read localStorage and send them to buildResultElement", function () {
      this.buildResultElement = function () {};
      const buildResultElementSpy = sinon.spy(this, "buildResultElement");
      const storedData = JSON.parse(localStorage.userCalcHistory);

      useStorage.call(this);
      sinon.assert.calledTwice(buildResultElementSpy);
      sinon.assert.calledWith(buildResultElementSpy,
                              storedData[0].mathExpression,
                              { tag: storedData[0].tag });
    });
  });
});
