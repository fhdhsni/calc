/* eslint-disable prefer-arrow-callback */
import { assert } from "chai";
import removeUnits from "../src/scripts/removeUnits";

describe("removeUnits", function () {
  it("should remove all children of .unit-container", function () {
    this.unitContainer = document.createElement("div");
    this.unitContainer.classList.add("unit-container");
    this.unitContainer.innerHTML = "<div></div>";
    this.toggleKeys = document.createElement("button");
    removeUnits.call(this);

    this.unitContainer.click();

    assert.equal(this.unitContainer.style.display, "none");
    assert.equal(this.unitContainer.children.length, 0,
                 "unitContainer children should've been removed.");
  });
});
