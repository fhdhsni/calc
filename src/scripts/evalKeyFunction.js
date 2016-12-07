/* eslint no-param-reassign: ["error", { "props": false }]*/
import showHelp from "./showHelp";
import closeHelp from "./closeHelp";
import math from "./math.min";
import buildResult from "./buildlResultElement";
import format from "./format";

export default function evalKeyFunction(evalKey, input, resultWrapper, helpWrapper, mathHelp) {
  evalKey.addEventListener("click", () => {
    const mathExpression = input.value.trim();

    if (mathExpression !== "") {
      if (mathExpression.search(/help/) === -1) {
        const result = format(math.format, math.eval(mathExpression));

        buildResult(mathExpression, result);
        resultWrapper.scrollTop = resultWrapper.scrollHeight;
        resultWrapper.lastChild.classList.remove("translate"); // kickoff slide animation
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
