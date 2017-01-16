/* eslint-disable prefer-arrow-callback */
import { assert } from "chai";
import evt from "../src/scripts/buildCustomEvent";

describe("buildCustomEvent", function () {
  it("should make a callStorageFunction Event and return it", function () {
    let eventWasFired = false;

    document.addEventListener("callStorageFunction", () => {
      eventWasFired = true;
    });
    document.dispatchEvent(evt);

    assert(evt instanceof Event, "evt isn't an instanceof Event");
    assert(eventWasFired, "evt hasn't been fired.");
  });
});
