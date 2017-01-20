export default function () {
  const arrayOfUnits = [
    { value: "m",
      text: "meter" },

    { value: "in",
      text: "inch" },

    { value: "ft",
      text: "foot" },

    { value: "yd",
      text: "yard" },

    { value: "mi",
      text: "mile" },

    { value: "li",
      text: "link" },

    { value: "rd",
      text: "rod" },

    { value: "ch",
      text: "chain" },

    { value: "angstrom",
      text: "angstrom" },

    { value: "mil",
      text: "mil" }];

  const div = this.createUnitMarkup(arrayOfUnits);
  let firstTime = true;

  this.lengthKey.addEventListener("click", () => {
    this.appendUnits(div);
    if (firstTime) {
      this.unitKeyEval();
      firstTime = false;
    }
  });
}
