export default function () {
  const arrayOfUnits = [
    { text: "Pa",
      value: "Pa" },

    { text: "psi",
      value: "psi" },

    { text: "atm",
      value: "atm" }];
  const div = this.createUnitMarkup(arrayOfUnits);

  this.addEventForUnitKeys(div, this.pressureKey);
}
