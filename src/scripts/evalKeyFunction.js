/* eslint no-param-reassign: ["error", { "props": false }]*/
import showHelp from "./showHelp";
import closeHelp from "./closeHelp";
import math from "./math.min";
import buildResultElement from "./buildlResultElement";
import format from "./format";
import evt from "./buildCustomEvent";

export default function evalKeyFunction(evalKey, input, resultWrapper, helpWrapper, mathHelp) {
  evalKey.addEventListener("click", () => {
    const mathExpression = input.value.trim();

    if (mathExpression !== "") {
      if (mathExpression.search(/help/) === -1) {
        const resultValue = format(math.format, math.eval(mathExpression));

        buildResultElement(mathExpression, { resultValue, resultWrapper });
        document.dispatchEvent(evt);
      } else {
        const result = math.eval(mathExpression);

        showHelp(result.doc);
        // mathHelp.style.display = "block";
        helpWrapper.classList.add("on-help");
        closeHelp(mathHelp, evalKey, helpWrapper);
      }
    }
  });
}
