export default function () {
  const arrayOfUnits = [
    { value: "m2",
      text: "m2" },

    { value: "sqin",
      text: "sqin" },

    { value: "sqft",
      text: "sqft" },

    { value: "sqyd",
      text: "sqyd" },

    { value: "sqmi",
      text: "sqmi" },

    { value: "sqrd",
      text: "sqrd" },

    { value: "sqch",
      text: "sqch" },

    { value: "sqmil",
      text: "sqmil" }];
  const div = this.createUnitMarkup(arrayOfUnits);

  this.addEventForUnitKeys(div, this.surfaceKey);
}
