import concatToValue from "./concatToValue";
import addEventsForSameContentKeys from "./addEventsForSameContentKeys";
import evalKeyFunction from "./evalKeyFunction";
import removeButton from "./removeButton";
import toggleKeyEvent from "./toggleKeyEvent";
import { useStorage } from "./storage";
import filterByTag from "./filterByTag";
import "../styles/main.scss";

document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".input");
  const sameText = document.querySelectorAll(".same-text");
  const evalKey = document.querySelector(".evaluate");
  const clearKey = document.querySelector(".clear");
  const resultWrapper = document.querySelector(".result-wrapper");
  const toggleKeys = document.querySelector(".toggle-keys");
  const keyContainer = document.querySelector(".key-container");
  const filterInput = document.querySelector(".header-input");
  const multiplication = document.getElementById("multiplication");
  const minus = document.getElementById("minus");
  const nthRoot = document.querySelector(".nth-root");
  const random = document.getElementById("random");
  const mathHelp = document.querySelector(".math-help");
  const helpWrapper = document.querySelector(".help-wrapper");

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

  clearKey.addEventListener("click", () => {
    input.value = "";
  });

  useStorage();
  addEventsForSameContentKeys(input, ...sameText);
  evalKeyFunction(evalKey, input, resultWrapper, helpWrapper, mathHelp);
  removeButton(resultWrapper);
  toggleKeyEvent(toggleKeys, resultWrapper, keyContainer);
  filterByTag(filterInput);

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
