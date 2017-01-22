export default function () {
  const arrayOfUnits = [
    { text: "second(s)",
      value: "s" },

    { text: "minute(s)",
      value: "minute" },

    { text: "hour(s)",
      value: "h" },

    { text: "day(s)",
      value: "days" }];
  const div = this.createUnitMarkup(arrayOfUnits);

  this.addEventForUnitKeys(div, this.timeKey);
}
