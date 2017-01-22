export default function () {
  const arrayOfUnits = [
    { value: "g",
      text: "gram" },

    { value: "ton",
      text: "ton" },

    { value: "tonne",
      text: "tonne" },

    { value: "gr",
      text: "grain" },

    { value: "dr",
      text: "dram" },

    { value: "oz",
      text: "ounce" },

    { value: "lb",
      text: "poundmass(lbs)" },

    { value: "cwt",
      text: "hundredweight" },

    { value: "stick",
      text: "stick" },

    { value: "stone",
      text: "stone" }];
  const div = this.createUnitMarkup(arrayOfUnits);

  this.addEventForUnitKeys(div, this.massKey);
  this.addEventForUnitKeys(div, this.sidebarMassKey);
}
