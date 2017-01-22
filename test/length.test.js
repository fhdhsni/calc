/* eslint-disable prefer-arrow-callback */
import sinon from "sinon";
import length from "../src/scripts/length";

describe("length", function () {
  it("should add functionality to length key", function () {
    const div = "foo";
    const arrayOfUnits = [
      { value: "m",
        text: "meter" },

      { value: "in",
        text: "inch" },

      { value: "ft",
        text: "foot" },

      { value: "yd",
        text: "yard" },

      { value: "mi",
        text: "mile" },

      { value: "li",
        text: "link" },

      { value: "rd",
        text: "rod" },

      { value: "ch",
        text: "chain" },

      { value: "angstrom",
        text: "angstrom" },

      { value: "mil",
        text: "mil" }];

    this.createUnitMarkup = sinon.stub().returns(div);
    this.addEventForUnitKeys = sinon.stub();
    this.lengthKey = "bar";

    length.call(this);

    sinon.assert.calledOnce(this.createUnitMarkup);
    sinon.assert.calledWith(this.createUnitMarkup, arrayOfUnits);
    sinon.assert.calledTwice(this.addEventForUnitKeys);
    sinon.assert.calledWith(this.addEventForUnitKeys, div, this.lengthKey);
    sinon.assert.calledWith(this.addEventForUnitKeys, div, this.sidebarLengthKey);
  });
});
