export default function () {
  const arrayOfUnits = [
    { value: "K",
      text: "kelvin" },

    { value: "degC",
      text: "celsius" },

    { value: "degF",
      text: "fahrenheit" },

    { value: "degR",
      text: "rankine" }];
  const div = this.createUnitMarkup(arrayOfUnits);

  this.addEventForUnitKeys(div, this.temperatureKey);
  this.addEventForUnitKeys(div, this.sidebarTemperatureKey);
}
