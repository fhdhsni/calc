/* eslint-disable prefer-arrow-callback */
import sinon from "sinon";
import addEventForUnitKeys from "../src/scripts/addEventForUnitKeys";

describe("addEventForUnitKeys", function () {
  it("", function () {
    const key = document.createElement("li");
    const div = document.createElement("div");

    this.unitKeyEval = function () {};
    this.appendUnits = function () {};
    const unitKeyEvalSpy = sinon.spy(this, "unitKeyEval");
    const appendUnitsSpy = sinon.spy(this, "appendUnits");

    this.bg = document.createElement("div");
    const bgSpy = sinon.spy(this.bg, "click");

    addEventForUnitKeys.call(this, div, key);
    key.click();
    key.click();

    sinon.assert.calledOnce(unitKeyEvalSpy);
    sinon.assert.calledTwice(appendUnitsSpy);
    sinon.assert.calledWith(appendUnitsSpy, div);
    sinon.assert.calledTwice(bgSpy);
  });
});
