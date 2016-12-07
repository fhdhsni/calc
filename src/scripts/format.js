export default function format(mathFormat, ans) {
  const result = mathFormat(ans, { notation: "fixed", precision: 4 });

  return result.replace(/0+$/, "").replace(/\.$/, ""); // removing extra zeros at the end
}
