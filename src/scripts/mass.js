export default function () {
  const arrayOfUnits = [
    { value: "g",
      text: "gram" },

    { value: "ton",
      text: "ton" },

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
  let firstTime = true;

  this.massKey.addEventListener("click", () => {
    this.appendUnits(div);
    if (firstTime) {
      this.unitKeyEval();
      firstTime = false;
    }
  });
}
