import { assert } from "chai";
import concatToValue from "../src/scripts/concatToValue";

describe("concatToValue", () => {
  it("should concat a given str to value of element passed to it", () => {
    const preFunctionCall = "foo";
    const str = "bar";
    const postFunctionCall = preFunctionCall + str;
    const el = {
      value: preFunctionCall,
    };

    concatToValue(el, str);
    assert.strictEqual(el.value, postFunctionCall);
  });
});

