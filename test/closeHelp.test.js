/* eslint-disable prefer-arrow-callback */

import { assert } from "chai";
import closeHelp from "../src/scripts/closeHelp";

describe("closeHelp", function () {
  it("should close help box", function () {
    let removeHelpElementsIsCalled = false;

    this.helpWrapper = document.createElement("div");
    this.helpWrapper.classList.add("on-help");
    this.removeHelpElements = function () {
      removeHelpElementsIsCalled = true;
    };

    closeHelp.call(this);

    this.helpWrapper.click();
    assert.equal(this.helpWrapper.classList.contains("on-help"), false,
                 "helpWrapper still contains on-help class but it shouldn't");
    assert(removeHelpElementsIsCalled, "removeHelpElements is never called");
  });
});

