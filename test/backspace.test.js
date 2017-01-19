/* eslint-disable prefer-arrow-callback */
import { assert } from "chai";
import backspace from "../src/scripts/backspace";

describe("backspace", function () {
  it("should delete a char or selection ", function () {
    const value = "abcd";
    const startPos = 1;
    const endPos = 3;

    document.body.innerHTML = `
        <input class="input" type="text"/>
        <button id="backspace">&larr;</button>`;
    this.backspaceKey = document.getElementById("backspace");
    this.input = document.querySelector(".input");
    this.input.value = value;
    backspace.call(this);
    this.backspaceKey.click();

    assert.equal(this.input.value, value.substr(0, value.length - 1),
                 "last char of value should have been deleted");
    this.input.value = value;
    this.input.setSelectionRange(startPos, endPos);
    this.backspaceKey.click();
    assert.equal(this.input.value, value.substr(0, startPos) + value.substr(endPos, value.length),
                 "selection hasn't been deleted properly");
  });
});
