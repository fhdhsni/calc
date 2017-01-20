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
  let firstTime = true;

  this.temperatureKey.addEventListener("click", () => {
    this.appendUnits(div);
    if (firstTime) {
      this.unitKeyEval();
      firstTime = false;
    }
  });
}
