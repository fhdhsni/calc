import math from "mathjs";
import concatToValue from "./concatToValue";
import addEventsForSameContentKeys from "./addEventsForSameContentKeys";
import evalKeyFunction from "./evalKeyFunction";
import removeButton from "./removeButton";
import removeHelpElements from "./removeHelpElements";
import toggleKeyEvent from "./toggleKeyEvent";
import { useStorage } from "./storage";
import filterByTag from "./filterByTag";
import tooltip from "./tooltip";
import "../styles/main.scss";
import closeHelp from "./closeHelp";
import showHelp from "./showHelp";
import buildResultElement from "./buildlResultElement";
import format from "./format";
import buildCustomEvent from "./buildCustomEvent";
import registerSW from "./registerSW";

document.addEventListener("DOMContentLoaded", () => {
  class App {
    constructor() {
      this.input = document.querySelector(".input");
      this.sameText = document.querySelectorAll(".same-text");
      this.evalKey = document.querySelector(".evaluate");
      this.clearKey = document.querySelector(".clear");
      this.resultWrapper = document.querySelector(".result-wrapper");
      this.toggleKeys = document.querySelector(".toggle-keys");
      this.keyContainer = document.querySelector(".key-container");
      this.filterInput = document.querySelector(".header-input");
      this.multiplication = document.getElementById("multiplication");
      this.minus = document.getElementById("minus");
      this.nthRoot = document.querySelector(".nth-root");
      this.random = document.getElementById("random");
      this.mathHelp = document.querySelector(".math-help");
      this.helpWrapper = document.querySelector(".help-wrapper");
      this.inputWrapper = document.querySelector(".input-wrapper");
      this.syntaxDT = document.querySelector(".syntax-dt");
      this.examplesDT = document.querySelector(".examples-dt");
      this.name = document.querySelector(".name");
      this.category = document.querySelector(".category");
      this.description = document.querySelector(".description");

      this.concatToValue = concatToValue;
      this.closeHelp = closeHelp;
      this.showHelp = showHelp;
      this.buildResultElement = buildResultElement;
      this.format = format;
      this.math = math;
      this.buildCustomEvent = buildCustomEvent;
      this.removeHelpElements = removeHelpElements;
      this.filterByTag = filterByTag;

      useStorage.call(this);
      addEventsForSameContentKeys.call(this);
      evalKeyFunction.call(this);
      this.closeHelp();
      removeButton.call(this);
      toggleKeyEvent.call(this);
      this.filterByTag();
      tooltip.call(this);

      this.multiplication.addEventListener("click", () => {
        concatToValue(this.input, "*");
      });

      this.minus.addEventListener("click", () => {
        concatToValue(this.input, "-");
      });

      this.nthRoot.addEventListener("click", () => {
        concatToValue(this.input, "nthRoot");
      });

      this.random.addEventListener("click", () => {
        concatToValue(this.input, "random()");
      });

      this.clearKey.addEventListener("click", () => {
        this.input.value = "";
      });


      // making input respond to Enter key (doesn't work on IE though)
      this.input.addEventListener("keyup", (evt) => {
        if (evt.key !== undefined) {
          if (evt.key === "Enter") {
            evt.preventDefault();
            this.evalKey.click();
          }
        } else if (evt.keyCode === 13) {
          evt.preventDefault();
          this.evalKey.click();
        }
      });
    }
  }
  /* eslint-disable no-new */
  new App();
  registerSW();
});
