export default function () {
  const arrayOfUnits = [
    { text: "rad",
      value: "rad" },

    { text: "deg",
      value: "deg" },

    { text: "grad",
      value: "grad" },

    { text: "cycle",
      value: "cycle" }];
  const div = this.createUnitMarkup(arrayOfUnits);

  this.addEventForUnitKeys(div, this.anglesKey);
}
