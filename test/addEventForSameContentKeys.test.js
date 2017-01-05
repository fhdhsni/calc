/* eslint-disable prefer-arrow-callback */
import sinon from "sinon";
import addEventsForSameContentKeys from "../src/scripts/addEventsForSameContentKeys";

describe("addEventsForSameContentKeys()", function () {
  it("should loop over sameText array-like and attach click event on its element", function () {
    const content = "sqrt";

    document.body.innerHTML = `<button>${content}</button>`;
    const button = document.querySelector("button");

    this.sameText = [button];
    this.input = null;
    const concatSpy = this.concatToValue = sinon.spy();
    const eventListenerSpy = sinon.spy(button, "addEventListener");

    addEventsForSameContentKeys.call(this);
    button.click();

    sinon.assert.calledOnce(eventListenerSpy);
    sinon.assert.calledWith(eventListenerSpy, "click");
    sinon.assert.calledOnce(concatSpy);
    sinon.assert.calledWith(concatSpy, this.input, content);

    eventListenerSpy.restore();
  });
});
