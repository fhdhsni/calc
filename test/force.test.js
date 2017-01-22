/* eslint-disable prefer-arrow-callback */
import sinon from "sinon";
import force from "../src/scripts/force";

describe("force", function () {
  it("should add functionality to force key", function () {
    const div = "foo";
    const arrayOfUnits = [
      { text: "newton",
        value: "N" },

      { text: "dyne",
        value: "dyn" },

      { text: "poundforce",
        value: "lbf" }];

    this.createUnitMarkup = sinon.stub().returns(div);
    this.addEventForUnitKeys = sinon.stub();
    this.forceKey = "bar";

    force.call(this);

    sinon.assert.calledOnce(this.createUnitMarkup);
    sinon.assert.calledWith(this.createUnitMarkup, arrayOfUnits);
    sinon.assert.calledOnce(this.addEventForUnitKeys);
    sinon.assert.calledWith(this.addEventForUnitKeys, div, this.forceKey);
  });
});
