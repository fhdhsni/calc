export default function () {
  const arrayOfUnits = [
    { text: "newton",
      value: "N" },

    { text: "dyne",
      value: "dyn" },

    { text: "poundforce",
      value: "lbf" }];
  const div = this.createUnitMarkup(arrayOfUnits);

  this.addEventForUnitKeys(div, this.forceKey);
}
