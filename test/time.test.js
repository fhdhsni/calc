/* eslint-disable prefer-arrow-callback */
import sinon from "sinon";
import time from "../src/scripts/time";

describe("time", function () {
  it("should add functionality to time key", function () {
    const div = "foo";
    const arrayOfUnits = [
      { text: "second(s)",
        value: "s" },

      { text: "minute(s)",
        value: "minute" },

      { text: "hour(s)",
        value: "h" },

      { text: "day(s)",
        value: "days" }];

    this.createUnitMarkup = sinon.stub().returns(div);
    this.addEventForUnitKeys = sinon.stub();
    this.timeKey = "bar";

    time.call(this);

    sinon.assert.calledOnce(this.createUnitMarkup);
    sinon.assert.calledWith(this.createUnitMarkup, arrayOfUnits);
    sinon.assert.calledOnce(this.addEventForUnitKeys);
    sinon.assert.calledWith(this.addEventForUnitKeys, div, this.timeKey);
  });
});
