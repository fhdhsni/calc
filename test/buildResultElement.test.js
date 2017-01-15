/* eslint-disable prefer-arrow-callback, max-len */
import { assert } from "chai";
import buildlResultElement from "../src/scripts/buildlResultElement";

describe("buildlResultElement", function () {
  it("should build the result element and append it to the resultWrapper", function () {
    const mathExpression = "2+2";
    const resultValue = "4";

    this.resultWrapper = document.createElement("div");
    buildlResultElement.call(this, mathExpression, { resultValue });
    assert.equal(this.resultWrapper.children.length,
                 1,
                 "resultWrapper doesn't have any children");
    assert.equal(this.resultWrapper.firstChild.children.length,
                 3,
                 "added result element should have 3 children");
    assert.equal(this.resultWrapper.querySelector(".math-expression").textContent.replace(/\s*/gi, ""),
                 "2+2=4",
                 "You fucked up.");
  });
});
