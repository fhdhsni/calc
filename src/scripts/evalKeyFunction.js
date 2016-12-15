/* eslint no-param-reassign: ["error", { "props": false }]*/
import showHelp from "./showHelp";
import closeHelp from "./closeHelp";
import math from "./math.min";
import buildResultElement from "./buildlResultElement";
import format from "./format";
import evt from "./buildCustomEvent";

export default function evalKeyFunction() {
  this.evalKey.addEventListener("click", () => {
    const mathExpression = this.input.value.trim();

    if (mathExpression !== "") {
      if (mathExpression.search(/help/) === -1) {
        const resultValue = format(math.format, math.eval(mathExpression));

        buildResultElement.call(this, mathExpression, { resultValue });
        document.dispatchEvent(evt);
      } else {
        const result = math.eval(mathExpression);

        showHelp(result.doc);
        this.helpWrapper.classList.add("on-help");
        closeHelp.call(this);
      }
    }
  });
}
