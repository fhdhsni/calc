import { assert } from "chai";
import concatToValue from "../src/scripts/concatToValue";

describe("concatToValue(el, str)", () => {
  it("it concats the str to el.value", () => {
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

