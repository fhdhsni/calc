/* eslint-disable prefer-arrow-callback, max-len*/
import { assert } from "chai";
import showHelp from "../src/scripts/showHelp";

describe("showHelp", function () {
  it("should add content of help object to .math-help element", function () {
    document.body.innerHTML = `
    <div class="help-wrapper">
      <dl class="math-help">
        <dt class="name-dt">name</dt>
        <dd class="name"></dd>
        
        <dt class="category-dt">category</dt>
        <dd class="category"></dd>

        <dt class="syntax-dt">syntax</dt>
        
        <dt class="description-dt">description</dt>
        <dd class="description"></dd>
        
        <dt class="examples-dt">examples</dt>
      </dl>
    </div>`;
    const helpObj = JSON.parse(`{
                  "name": "log",
                  "category": "Arithmetic",
                  "syntax": [
                    "log(x)",
                    "log(x, base)"
                  ],
                  "description": "Compute the logarithm of a value. If no base is provided, the natural logarithm of x is calculated. If base if provided, the logarithm is calculated for the specified base. log(x, base) is defined as log(x) / log(base).",
                  "examples": [
                    "log(3.5)",
                    "a = log(2.4)",
                    "exp(a)",
                    "10 ^ 4",
                    "log(10000, 10)",
                    "log(10000) / log(10)",
                    "b = log(1024, 2)",
                    "2 ^ b"
                  ],
                  "seealso": [
                    "exp",
                    "log10"
                  ]
                }`);

    this.name = document.querySelector(".name");
    this.category = document.querySelector(".category");
    this.description = document.querySelector(".description");
    this.syntaxDT = document.querySelector(".syntax-dt");
    this.examplesDT = document.querySelector(".examples-dt");
    showHelp.call(this, helpObj);

    assert.equal(document.querySelector(".math-help").children.length, 18,
                 "based on content given helpObj .math-help should have 18 children");
  });
});
