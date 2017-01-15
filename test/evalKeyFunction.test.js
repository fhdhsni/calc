/* eslint-disable prefer-arrow-callback */
import sinon from "sinon";
import { assert } from "chai";
import evalKeyFunction from "../src/scripts/evalKeyFunction";

describe("evalKeyFunction()", function () {
  it("should read this.input.value and take appropriate action", function () {
    this.format = function () {};
    this.buildCustomEvent = function () {};
    this.buildResultElement = function () {};
    this.showHelp = function () {};

    const format = sinon.spy(this, "format");
    const buildResultElement = sinon.spy(this, "buildResultElement");
    const showHelp = sinon.spy(this, "showHelp");

    this.buildCustomEvent = document.createEvent("Event");
    this.buildCustomEvent.initEvent("callStorageFunction", true, true);
    this.evalKey = document.createElement("button");
    this.helpWrapper = document.createElement("div");
    sinon.spy(this.helpWrapper, "focus");
    this.input = document.createElement("input");
    this.math = {
      eval: sinon.stub().returns({ doc: null }),
    };

    evalKeyFunction.call(this);
    this.input.value = "cos(90 deg)";
    this.evalKey.click();
    this.input.value = "help(cos)";
    this.evalKey.click();
    sinon.assert.calledOnce(format);
    sinon.assert.calledOnce(buildResultElement);
    sinon.assert.calledOnce(showHelp);
    sinon.assert.calledTwice(this.math.eval);
    assert(this.helpWrapper.classList.contains("on-help"),
           "helpWrapper doesn't have on-help class");
    assert.equal(this.helpWrapper.tabIndex, -1, "helpWrapper.tabIndex isn't -1");
    sinon.assert.calledOnce(this.helpWrapper.focus);
  });
});
