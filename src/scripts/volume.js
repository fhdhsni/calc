export default function () {
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
  const div = this.createUnitMarkup(arrayOfUnits);

  this.addEventForUnitKeys(div, this.volumeKey);
  this.addEventForUnitKeys(div, this.sidebarVolumeKey);
}
