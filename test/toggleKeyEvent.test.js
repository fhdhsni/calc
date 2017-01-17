/* eslint-disable prefer-arrow-callback */
import { assert } from "chai";
import toggleKeyEvent from "../src/scripts/toggleKeyEvent";

describe("toggleKey", function () {
  it("should hide/show on screen keyboard", function () {
    document.body.innerHTML = `
      <div class="result-wrapper"></div>
      <div class="input-wrapper"></div>
      <button class="toggle-keys">hide keys</button>
      <div class="key-container"></div>`;
    this.resultWrapper = document.querySelector(".result-wrapper");
    this.inputWrapper = document.querySelector(".input-wrapper");
    this.toggleKeys = document.querySelector(".toggle-keys");
    this.keyContainer = document.querySelector(".key-container");

    toggleKeyEvent.call(this);
    this.toggleKeys.click();
    assert(this.keyContainer.classList.contains("display-none"),
           "should have display-none class");
    assert(this.inputWrapper.classList.contains("on-hidden-keys"),
           "should have on-hidden-keys class");
    assert(this.resultWrapper.classList.contains("on-hidden-keys"),
           "should have on-hidden-keys class");
    assert.equal(this.toggleKeys.textContent, "show keys");
    this.toggleKeys.click();
    assert.isFalse(this.keyContainer.classList.contains("display-none"),
                   "should not have display-none class");
    assert.isFalse(this.inputWrapper.classList.contains("on-hidden-keys"),
                   "should not have on-hidden-keys class");
    assert.isFalse(this.resultWrapper.classList.contains("on-hidden-keys"),
                   "should not have on-hidden-keys class");
    assert.equal(this.toggleKeys.textContent, "hide keys");
  });
});
