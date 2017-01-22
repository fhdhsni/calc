/* eslint-disable prefer-arrow-callback */
import sinon from "sinon";
import pressure from "../src/scripts/pressure";

describe("pressure", function () {
  it("should add functionality to pressure key", function () {
    const div = "foo";
    const arrayOfUnits = [
      { text: "Pa",
        value: "Pa" },

      { text: "psi",
        value: "psi" },

      { text: "atm",
        value: "atm" }];

    this.createUnitMarkup = sinon.stub().returns(div);
    this.addEventForUnitKeys = sinon.stub();
    this.pressureKey = "bar";

    pressure.call(this);

    sinon.assert.calledOnce(this.createUnitMarkup);
    sinon.assert.calledWith(this.createUnitMarkup, arrayOfUnits);
    sinon.assert.calledOnce(this.addEventForUnitKeys);
    sinon.assert.calledWith(this.addEventForUnitKeys, div, this.pressureKey);
  });
});

