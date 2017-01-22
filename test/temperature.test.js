/* eslint-disable prefer-arrow-callback */
import sinon from "sinon";
import temperature from "../src/scripts/temperature";

describe("temperature", function () {
  it("should add functionality to temperature key", function () {
    const div = "foo";
    const arrayOfUnits = [
      { value: "K",
        text: "kelvin" },

      { value: "degC",
        text: "celsius" },

      { value: "degF",
        text: "fahrenheit" },

      { value: "degR",
        text: "rankine" }];

    this.createUnitMarkup = sinon.stub().returns(div);
    this.addEventForUnitKeys = sinon.stub();
    this.temperatureKey = "bar";
    this.sidebarTemperatureKey = "zoo";

    temperature.call(this);

    sinon.assert.calledOnce(this.createUnitMarkup);
    sinon.assert.calledWith(this.createUnitMarkup, arrayOfUnits);
    sinon.assert.calledTwice(this.addEventForUnitKeys);
    sinon.assert.calledWith(this.addEventForUnitKeys, div, this.temperatureKey);
    sinon.assert.calledWith(this.addEventForUnitKeys, div, this.sidebarTemperatureKey);
  });
});
