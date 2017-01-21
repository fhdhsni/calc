/* eslint-disable prefer-arrow-callback */
import sinon from "sinon";
import registerSW from "../src/scripts/registerSW";

describe("registerSW", function () {
  it("should register serviceWorker in browsers that support it", function () {
    if ("serviceWorker" in navigator) {
      const spy = sinon.spy(navigator.serviceWorker, "register");

      registerSW();
      sinon.assert.calledOnce(spy);
      sinon.assert.calledWith(spy, "./sw.js");
    }
  });
});

