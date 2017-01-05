/* eslint no-param-reassign: ["error", { "props": false }]*/

export default function evalKeyFunction() {
  this.closeHelp();
  this.evalKey.addEventListener("click", () => {
    const mathExpression = this.input.value.trim();

    if (mathExpression !== "") {
      if (mathExpression.search(/help/) === -1) {
        const resultValue = this.format(this.math.format, this.math.eval(mathExpression));

        this.buildResultElement(mathExpression, { resultValue });
        document.dispatchEvent(this.buildCustomEvent);
      } else {
        const result = this.math.eval(mathExpression);

        this.showHelp(result.doc);
        this.helpWrapper.classList.add("on-help");
        this.helpWrapper.tabIndex = "-1";  // to make it focusable
        this.helpWrapper.focus();
      }
    }
  });
}
