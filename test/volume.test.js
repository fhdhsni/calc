/* eslint-disable prefer-arrow-callback */
import sinon from "sinon";
import volume from "../src/scripts/volume";

describe("volume", function () {
  it("should add functionality to volume key", function () {
    const div = "foo";
    const arrayOfUnits = [
      { value: "m3",
        text: "m3" },

      { value: "liter",
        text: "liter" },

      { value: "cc",
        text: "cc" },

      { value: "cuin",
        text: "cuin" },

      { value: "cuft",
        text: "cuft" },

      { value: "teaspoon",
        text: "teaspoon" },

      { value: "tablespoon",
        text: "tablespoon" }];

    this.createUnitMarkup = sinon.stub().returns(div);
    this.addEventForUnitKeys = sinon.stub();
    this.volumeKey = "bar";

    volume.call(this);

    sinon.assert.calledOnce(this.createUnitMarkup);
    sinon.assert.calledWith(this.createUnitMarkup, arrayOfUnits);
    sinon.assert.calledTwice(this.addEventForUnitKeys);
    sinon.assert.calledWith(this.addEventForUnitKeys, div, this.volumeKey);
    sinon.assert.calledWith(this.addEventForUnitKeys, div, this.sidebarVolumeKey);
  });
});
