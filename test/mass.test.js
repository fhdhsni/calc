/* eslint-disable prefer-arrow-callback */
import sinon from "sinon";
import mass from "../src/scripts/mass";

describe("mass", function () {
  it("should add functionality to mass key", function () {
    const div = "foo";
    const arrayOfUnits = [
      { value: "g",
        text: "gram" },

      { value: "ton",
        text: "ton" },

      { value: "tonne",
        text: "tonne" },

      { value: "gr",
        text: "grain" },

      { value: "dr",
        text: "dram" },

      { value: "oz",
        text: "ounce" },

      { value: "lb",
        text: "poundmass(lbs)" },

      { value: "cwt",
        text: "hundredweight" },

      { value: "stick",
        text: "stick" },

      { value: "stone",
        text: "stone" }];

    this.createUnitMarkup = sinon.stub().returns(div);
    this.addEventForUnitKeys = sinon.stub();
    this.massKey = "bar";
    this.sidebarMassKey = "zoo";

    mass.call(this);

    sinon.assert.calledOnce(this.createUnitMarkup);
    sinon.assert.calledWith(this.createUnitMarkup, arrayOfUnits);
    sinon.assert.calledTwice(this.addEventForUnitKeys);
    sinon.assert.calledWith(this.addEventForUnitKeys, div, this.massKey);
    sinon.assert.calledWith(this.addEventForUnitKeys, div, this.sidebarMassKey);
  });
});
