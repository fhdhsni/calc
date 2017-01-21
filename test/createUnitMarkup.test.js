/* eslint-disable prefer-arrow-callback */
import { assert } from "chai";
import createUnitMarkup from "../src/scripts/createUnitMarkup";

describe("createUnitMarkup", function () {
  it("should take an array of units and make corresponding necessary elms.", function () {
    const arrayOfUnits = [
      { value: "K",
        text: "kelvin" },

      { value: "degR",
        text: "rankine" }];
    const returnedDiv = createUnitMarkup(arrayOfUnits);
    const selects = returnedDiv.querySelectorAll("select");
    const input = returnedDiv.querySelector("input");
    const span = returnedDiv.querySelector("span");
    const button = returnedDiv.querySelector("button");
    const rankine = returnedDiv.querySelector("[value=degR]");
    const kelvin = returnedDiv.querySelector("[value=K]");

    assert.equal(selects.length, 2, "There should be 2 select elements.");
    assert.equal(span.textContent, "in", "textContext of span should be 'in'");
    assert(button.classList.contains("unit-evaluate"), "button should contain unit-evaluate class");
    assert.equal(input.type, "number", "input should be type number");
    assert.equal(rankine.textContent, "rankine");
    assert.equal(kelvin.textContent, "kelvin");
  });
});
