/* eslint-disable prefer-arrow-callback */
import sinon from "sinon";
import power from "../src/scripts/power";

describe("power", function () {
  it("should add functionality to power key", function () {
    const div = "foo";
    const arrayOfUnits = [
      { text: "watt",
        value: "W" },

      { text: "hp",
        value: "hp" }];

    this.createUnitMarkup = sinon.stub().returns(div);
    this.addEventForUnitKeys = sinon.stub();
    this.powerKey = "bar";

    power.call(this);

    sinon.assert.calledOnce(this.createUnitMarkup);
    sinon.assert.calledWith(this.createUnitMarkup, arrayOfUnits);
    sinon.assert.calledOnce(this.addEventForUnitKeys);
    sinon.assert.calledWith(this.addEventForUnitKeys, div, this.powerKey);
  });
});
