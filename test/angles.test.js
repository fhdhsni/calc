/* eslint-disable prefer-arrow-callback */
import sinon from "sinon";
import angles from "../src/scripts/angles";

describe("angles", function () {
  it("should add functionality to angles key", function () {
    const div = "foo";
    const arrayOfUnits = [
      { text: "rad",
        value: "rad" },

      { text: "deg",
        value: "deg" },

      { text: "grad",
        value: "grad" },

      { text: "cycle",
        value: "cycle" }];

    this.createUnitMarkup = sinon.stub().returns(div);
    this.addEventForUnitKeys = sinon.stub();
    this.anglesKey = "bar";

    angles.call(this);

    sinon.assert.calledOnce(this.createUnitMarkup);
    sinon.assert.calledWith(this.createUnitMarkup, arrayOfUnits);
    sinon.assert.calledOnce(this.addEventForUnitKeys);
    sinon.assert.calledWith(this.addEventForUnitKeys, div, this.anglesKey);
  });
});
