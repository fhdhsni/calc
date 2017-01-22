/* eslint-disable prefer-arrow-callback */
import sinon from "sinon";
import energy from "../src/scripts/energy";

describe("energy", function () {
  it("should add functionality to energy key", function () {
    const div = "foo";
    const arrayOfUnits = [
      { text: "joule",
        value: "J" },

      { text: "erg",
        value: "erg" },

      { text: "Wh",
        value: "Wh" },

      { text: "BTU",
        value: "BTU" },

      { text: "electronvolt",
        value: "eV" }];

    this.createUnitMarkup = sinon.stub().returns(div);
    this.addEventForUnitKeys = sinon.stub();
    this.energyKey = "bar";

    energy.call(this);

    sinon.assert.calledOnce(this.createUnitMarkup);
    sinon.assert.calledWith(this.createUnitMarkup, arrayOfUnits);
    sinon.assert.calledOnce(this.addEventForUnitKeys);
    sinon.assert.calledWith(this.addEventForUnitKeys, div, this.energyKey);
  });
});
