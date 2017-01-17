/* eslint-disable prefer-arrow-callback */
import { assert } from "chai";
import removeHelpElements from "../src/scripts/removeHelpElements";

describe("removeHelpElements", function () {
  it("should remove all elements with .examples and syntax calasses", function () {
    document.body.innerHTML = `
      <dl class="math-help">
          <dd class="examples">10 ^ 4</dd>
          <dd class="examples">2 ^ b</dd>
          <dd class="syntax">log(x, base)</dd>
          <dd class="syntax">log(x)</dd>
      </dl>`;
    removeHelpElements();
    assert.equal(document.querySelector(".math-help").children.length, 0,
                 "All children should've been removed");
  });
});
