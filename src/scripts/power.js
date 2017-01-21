export default function () {
  const arrayOfUnits = [
    { text: "watt",
      value: "W" },

    { text: "hp",
      value: "hp" }];
  const div = this.createUnitMarkup(arrayOfUnits);

  this.addEventForUnitKeys(div, this.powerKey);
}
