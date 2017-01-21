export default function () {
  const arrayOfUnits = [
    { text: "joule",
      value: "J" },

    { text: "erg",
      value: "erg" },

    { text: "Wh",
      value: "Wh" },

    { text: "BTU",
      value: "BTU" },

    { text: "electronvolt",
      value: "eV" }];
  const div = this.createUnitMarkup(arrayOfUnits);

  this.addEventForUnitKeys(div, this.energyKey);
}
