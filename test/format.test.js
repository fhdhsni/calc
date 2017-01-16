/* eslint-disable prefer-arrow-callback */

import { assert } from "chai";
import format from "../src/scripts/format";

describe("format", function () {
  it("should format math result and remove trailing 0s", function () {
    assert.equal(format(ans => ans, "200"), "200");
    assert.equal(format(ans => ans, "200.00"), "200");
    assert.equal(format(ans => ans, "200.010"), "200.01");
    assert.equal(format(ans => ans, "200.010 ms"), "200.01 ms");
  });
});
