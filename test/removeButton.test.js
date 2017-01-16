/* eslint-disable prefer-arrow-callback */

import { assert } from "chai";
import removeButton from "../src/scripts/removeButton";

describe("removeButton", function () {
  this.timeout(5000);
  it("should remove .result from DOM when .delete is clicked", function (done) {
    document.body.innerHTML = `
      <style>
            .result {
                transition: transform .3s;
            }
            .translate {
                transform: translateX(-100em);
            }
      </style>
      <div class="result-wrapper">
        <article class="result">
          <input class="tag" type="text" value="" placeholder="tag">
          <article class="math-expression">3+3 &nbsp;= &nbsp;6</article>
          <button class="delete">remove</button>
        </article>
      </div>`;
    this.resultWrapper = document.querySelector(".result-wrapper");
    const button = document.querySelector(".delete");

    removeButton.call(this);

    setTimeout(() => {
      button.click();
    }, 100);                 // Gee, i dunno. Browsers need a little bit of time to do their stuff.
    setTimeout(() => {
      const length = this.resultWrapper.children.length;

      assert.equal(length, 0, ".result hasn't been removed from .result-wrapper");
      done();
    }, 500);
  });
});
