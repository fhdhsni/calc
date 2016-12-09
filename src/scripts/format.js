export default function format(mathFormat, ans) {
  const result = mathFormat(ans, { notation: "fixed", precision: 4 });
  let nonNumberPart;
  let numberPart = result.replace(/\s\w*\s*$/i, (match) => {
    // if there's any word after numbers like units
    nonNumberPart = match;

    return "";
  });

  numberPart = numberPart.replace(/0+$/, "").replace(/\.$/, ""); // removing extra zeros at the end
  if (nonNumberPart !== undefined) { // in case there wasn't any unit/word
    return `${numberPart}${nonNumberPart}`;
  }

  return numberPart;
}
