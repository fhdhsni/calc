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
import backspace from "./backspace";
import temperature from "./temperature";
import mass from "./mass";
import length from "./length";
import volume from "./volume";
import appendUnits from "./appendUnits";
import removeUnits from "./removeUnits";
import unitKeyEval from "./unitEvalKey";
import createUnitMarkup from "./createUnitMarkup";
import sidebar from "./sidebar";
import surface from "./surface";
import addEventForUnitKeys from "./addEventForUnitKeys";
import liquidVolume from "./liquidVolume";
import angles from "./angles";
import time from "./time";
import force from "./force";
import energy from "./energy";
import power from "./power";
import pressure from "./pressure";

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
      this.random = document.querySelector(".random");
      this.mathHelp = document.querySelector(".math-help");
      this.helpWrapper = document.querySelector(".help-wrapper");
      this.inputWrapper = document.querySelector(".input-wrapper");
      this.syntaxDT = document.querySelector(".syntax-dt");
      this.examplesDT = document.querySelector(".examples-dt");
      this.name = document.querySelector(".name");
      this.category = document.querySelector(".category");
      this.description = document.querySelector(".description");
      this.backspaceKey = document.getElementById("backspace");
      this.backspaceKey = document.getElementById("backspace");
      this.bg = document.querySelector(".bg");

      this.temperatureKey = document.getElementById("temperature");
      this.massKey = document.getElementById("mass");
      this.lengthKey = document.getElementById("length");
      this.volumeKey = document.getElementById("volume");
      this.surfaceKey = document.getElementById("surface");
      this.liquidKey = document.getElementById("liquid-volume");
      this.anglesKey = document.getElementById("angles");
      this.timeKey = document.getElementById("time");
      this.forceKey = document.getElementById("force");
      this.energyKey = document.getElementById("energy");
      this.powerKey = document.getElementById("power");
      this.pressureKey = document.getElementById("pressure");
      this.sidebarTemperatureKey = document.getElementById("sidebar-temperature");
      this.sidebarMassKey = document.getElementById("sidebar-mass");
      this.sidebarLengthKey = document.getElementById("sidebar-length");
      this.sidebarVolumeKey = document.getElementById("sidebar-volume");

      this.unitContainer = document.querySelector(".unit-container");
      this.sidebarEl = document.querySelector(".side-bar");
      this.convertor = document.querySelector(".convertor");

      this.concatToValue = concatToValue;
      this.closeHelp = closeHelp;
      this.showHelp = showHelp;
      this.buildResultElement = buildResultElement;
      this.format = format;
      this.math = math;
      this.buildCustomEvent = buildCustomEvent;
      this.removeHelpElements = removeHelpElements;
      this.filterByTag = filterByTag;
      this.backspace = backspace;
      this.temperature = temperature;
      this.mass = mass;
      this.length = length;
      this.volume = volume;
      this.appendUnits = appendUnits;
      this.removeUnits = removeUnits;
      this.unitKeyEval = unitKeyEval;
      this.createUnitMarkup = createUnitMarkup;
      this.sidebar = sidebar;
      this.surface = surface;
      this.addEventForUnitKeys = addEventForUnitKeys;
      this.liquidVolume = liquidVolume;
      this.angles = angles;
      this.time = time;
      this.force = force;
      this.energy = energy;
      this.power = power;
      this.pressure = pressure;

      useStorage.call(this);
      addEventsForSameContentKeys.call(this);
      evalKeyFunction.call(this);
      this.closeHelp();
      removeButton.call(this);
      toggleKeyEvent.call(this);
      this.filterByTag();
      tooltip.call(this);
      this.backspace();
      this.removeUnits();
      this.sidebar();
      this.temperature();
      this.length();
      this.mass();
      this.volume();
      this.surface();
      this.liquidVolume();
      this.angles();
      this.time();
      this.force();
      this.energy();
      this.power();
      this.pressure();

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
