/* eslint no-param-reassign: ["error", { "props": false }]*/
// import math from "./math.min";
import math from "mathjs";
import showHelp from "./showHelp";
import closeHelp from "./closeHelp";
import buildResultElement from "./buildlResultElement";
import format from "./format";
import evt from "./buildCustomEvent";

export default function evalKeyFunction() {
  closeHelp.call(this);
  this.evalKey.addEventListener("click", () => {
    const mathExpression = this.input.value.trim();

    if (mathExpression !== "") {
      if (mathExpression.search(/help/) === -1) {
        const resultValue = format(math.format, math.eval(mathExpression));

        buildResultElement.call(this, mathExpression, { resultValue });
        document.dispatchEvent(evt);
      } else {
        const result = math.eval(mathExpression);

        showHelp.call(this, result.doc);
        this.helpWrapper.classList.add("on-help");
        this.helpWrapper.tabIndex = "-1";  // to make it focusable
        this.helpWrapper.focus();
      }
    }
  });
}
