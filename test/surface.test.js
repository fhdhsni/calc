/* eslint-disable prefer-arrow-callback */
import sinon from "sinon";
import surface from "../src/scripts/surface";

describe("surface", function () {
  it("should add functionality to surface key", function () {
    const div = "foo";
    const arrayOfUnits = [
      { value: "m2",
        text: "m2" },

      { value: "sqin",
        text: "sqin" },

      { value: "sqft",
        text: "sqft" },

      { value: "sqyd",
        text: "sqyd" },

      { value: "sqmi",
        text: "sqmi" },

      { value: "sqrd",
        text: "sqrd" },

      { value: "sqch",
        text: "sqch" },

      { value: "sqmil",
        text: "sqmil" }];

    this.createUnitMarkup = sinon.stub().returns(div);
    this.addEventForUnitKeys = sinon.stub();
    this.surfaceKey = "bar";

    surface.call(this);

    sinon.assert.calledOnce(this.createUnitMarkup);
    sinon.assert.calledWith(this.createUnitMarkup, arrayOfUnits);
    sinon.assert.calledOnce(this.addEventForUnitKeys);
    sinon.assert.calledWith(this.addEventForUnitKeys, div, this.surfaceKey);
  });
});
