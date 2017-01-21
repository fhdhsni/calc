export default function format(mathFormat, ans) {
  const result = mathFormat(ans, { notation: "fixed", precision: 6 });
  let unit;

  // if there's any word after numbers (e.g units)
  let numberPart = result.replace(/[^0-9.]+$/i, (match) => {
    unit = match;

    return "";
  });

  numberPart = numberPart.replace(/\.0*$/, ""); // extra zeros at the end
  if (numberPart.indexOf(".") !== -1) {         // if there's decimal point
    numberPart = numberPart.replace(/0+$/, ""); // remove zeros at the end
  }
  if (unit !== undefined) {
    return `${numberPart}${unit}`;
  }

  return numberPart;
}
