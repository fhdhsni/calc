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
  let firstTime = true;

  this.volumeKey.addEventListener("click", () => {
    this.appendUnits(div);
    if (firstTime) {
      this.unitKeyEval();
      firstTime = false;
    }
  });
}
