import buildResult from "./buildlResultElement";
import showHelp from "./showHelp";
import exitHelp from "./exitHelp";
import "../styles/main.scss";
import math from "./math.min";

function format(ans) {
  const result = math.format(ans, { notation: "fixed", precision: 4 });

  return result.replace(/0+$/, "").replace(/\.$/, ""); // removing extra zeros at the end
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".input");
  const sameText = document.querySelectorAll(".same-text");
  const evalKey = document.querySelector(".evaluate");
  const clearKey = document.querySelector(".clear");
  const resultWrapper = document.querySelector(".result-wrapper");
  const toggleKeys = document.querySelector(".toggle-keys");
  // const keyWrapper = document.querySelector(".key-wrapper");
  const keyContainer = document.querySelector(".key-container");
  const filterInput = document.querySelector(".header-input");
  // const inputWrapper = document.querySelector(".input-wrapper");
  const multiplication = document.getElementById("multiplication");
  const minus = document.getElementById("minus");
  const nthRoot = document.querySelector(".nth-root");
  const random = document.getElementById("random");
  // math-help
  const mathHelp = document.querySelector(".math-help");
  const helpWrapper = document.querySelector(".help-wrapper");
  // const leftArrow = document.getElementById("left-arrow");

  function addEvents(...buttons) {     // for keys with same-text class
    buttons.forEach((key) => {
      key.addEventListener("click", () => {
        input.value += key.textContent;
      });
    });
  }
  function concatToValue(el, str) {
    /* eslint-disable no-param-reassign */
    el.value += str;
    /* eslint-enable no-param-reassign */
  }

  addEvents(...sameText);
  multiplication.addEventListener("click", () => {
    concatToValue(input, "*");
  });

  minus.addEventListener("click", () => {
    concatToValue(input, "-");
  });
  nthRoot.addEventListener("click", () => {
    concatToValue(input, "nthRoot");
  });
  random.addEventListener("click", () => {
    concatToValue(input, "random()");
  });

  evalKey.addEventListener("click", () => {
    const mathExpression = input.value.trim().toLowerCase();

    if (mathExpression !== "") {
      if (mathExpression.search(/help/) === -1) {
        const result = format(math.eval(mathExpression));

        buildResult(mathExpression, result);
        resultWrapper.scrollTop = resultWrapper.scrollHeight;
        resultWrapper.lastChild.classList.remove("translate"); // kickoff slide animation
      } else {
        const result = math.eval(mathExpression);

        showHelp(result.doc);
        mathHelp.style.display = "block";
        helpWrapper.classList.toggle("on-help");
        exitHelp(mathHelp, evalKey, helpWrapper);
      }
    }
  });

  clearKey.addEventListener("click", () => {
    input.value = "";
    // input.focus();
  });

  // removing .result when '.remove' is clicked;
  resultWrapper.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
      const toBeRemoved = e.target.parentNode;

      toBeRemoved.classList.add("translate"); // translate animation
      setTimeout(() => {         // making enough time for translate animation
        this.removeChild(toBeRemoved);
      }, 300);
    }
  });

  // hide/show keys
  toggleKeys.addEventListener("click", function () {
    const flag = keyContainer.classList.toggle("display-none");

    // inputWrapper.classList.toggle("on-hidden-keys");
    resultWrapper.classList.toggle("on-hidden-keys");
    if (flag) {
      this.textContent = "show keys";
    } else {
      this.textContent = "hide keys";
    }
  });

  (function filter() {
    filterInput.addEventListener("keyup", () => {
      const allResults = resultWrapper.querySelectorAll(".result");

      for (let i = 0; i < allResults.length; i += 1) {
        const result = allResults[i];
        const tag = result.querySelector("input");

        if (tag.value.toLowerCase().search(filterInput.value.toLowerCase()) === -1) {
          result.classList.add("result-hidden");
        } else {
          result.classList.remove("result-hidden");
        }
      }
    });
  }());

  // making input respond to Enter key (doesn't on IE though)
  input.addEventListener("keyup", (evt) => {
    if (evt.key !== undefined) {
      if (evt.key === "Enter") {
        evt.preventDefault();
        evalKey.click();
      }
    } else if (evt.keyCode === 13) {
      evt.preventDefault();
      evalKey.click();
    }
  });
});
