/* eslint-disable prefer-arrow-callback */
import sinon from "sinon";
import { assert } from "chai";
import unitEvalKey from "../src/scripts/unitEvalKey";

describe("unitEvalKey", function () {
  it("should assign the math expression to input.value by readin' corresponding elms", function () {
    this.input = document.createElement("input");
    this.evalKey = document.createElement("button");
    const spy = sinon.spy(this.evalKey, "click");

    document.body.innerHTML = `
  <div>
      <input class="number" value="1" type="number">
      <select class="from" name="units">
        <option value="s" selected>second(s)</option>
        <option value="minute">minute(s)</option>
      </select>
      <span class="in">in</span>
      <select class="to" name="units">
        <option value="s">second(s)</option>
        <option value="minute" selected>minute(s)</option>
      </select>
      <button class="unit-evaluate">evaluate</button>
  </div>`;
    unitEvalKey.call(this);
    document.querySelector(".unit-evaluate").click();

    assert.equal(this.input.value, "1 s in minute");
    sinon.assert.calledOnce(spy);
  });
});

