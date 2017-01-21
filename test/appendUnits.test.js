/* eslint-disable prefer-arrow-callback */
import sinon from "sinon";
import { assert } from "chai";
import appendUnits from "../src/scripts/appendUnits";

describe("appendUnits", function () {
  it("should append a given elm to unitContainer", function () {
    const div = document.createElement("div");
    const blah = div.textContent = "blah";

    this.unitContainer = document.createElement("div");
    this.toggleKeys = document.createElement("button");
    const spy = sinon.spy(this.toggleKeys, "click");

    appendUnits.call(this, div);
    assert.equal(this.unitContainer.children.length, 1, "appending didn't happen?");
    assert.equal(this.unitContainer.children[0].textContent, blah);
    sinon.assert.calledOnce(spy);
  });
});

