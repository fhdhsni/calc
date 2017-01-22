/* eslint-disable prefer-arrow-callback */
import sinon from "sinon";
import liquidVolume from "../src/scripts/liquidVolume";

describe("liquidVolume", function () {
  it("should add functionality to liquidVolume key", function () {
    const div = "foo";
    const arrayOfUnits = [
      { text: "fluiddram",
        value: "fldr" },

      { text: "fluidounce",
        value: "floz" },

      { text: "gill",
        value: "gi" },

      { text: "cup",
        value: "cp" },

      { text: "pint",
        value: "pt" },

      { text: "quart",
        value: "qt" },

      { text: "gallon",
        value: "gal" },

      { text: "beerbarrel",
        value: "bbl" },

      { text: "oilbarrel",
        value: "obl" },

      { text: "hogshead",
        value: "hogshead" },

      { text: "drop",
        value: "gtt" }];

    this.createUnitMarkup = sinon.stub().returns(div);
    this.addEventForUnitKeys = sinon.stub();
    this.liquidKey = "bar";

    liquidVolume.call(this);

    sinon.assert.calledOnce(this.createUnitMarkup);
    sinon.assert.calledWith(this.createUnitMarkup, arrayOfUnits);
    sinon.assert.calledOnce(this.addEventForUnitKeys);
    sinon.assert.calledWith(this.addEventForUnitKeys, div, this.liquidKey);
  });
});
