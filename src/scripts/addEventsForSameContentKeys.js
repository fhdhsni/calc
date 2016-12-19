/* eslint no-param-reassign: ["error", { "props": false }]*/
import concatToValue from "./concatToValue";

export default function addEvents() {
  for (let i = 0; i < this.sameText.length; i += 1) {
    const key = this.sameText[i];

    key.addEventListener("click", () => concatToValue(this.input, key.textContent));
  }
}
