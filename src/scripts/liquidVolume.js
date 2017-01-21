export default function () {
  const arrayOfUnits = [
    { text: "fluiddram",
      value: "fldr" },

    { text: "fluidounce",
      value: "floz" },

    { text: "gill",
      value: "gi" },

    { text: "cup",
      value: "cp" },

    { text: "pint",
      value: "pt" },

    { text: "quart",
      value: "qt" },

    { text: "gallon",
      value: "gal" },

    { text: "beerbarrel",
      value: "bbl" },

    { text: "oilbarrel",
      value: "obl" },

    { text: "hogshead",
      value: "hogshead" },

    { text: "drop",
      value: "gtt" }];
  const div = this.createUnitMarkup(arrayOfUnits);

  this.addEventForUnitKeys(div, this.liquidKey);
}
