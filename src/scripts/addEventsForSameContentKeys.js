/* eslint no-param-reassign: ["error", { "props": false }]*/
export default function addEvents(input, ...buttons) {
  buttons.forEach((key) => {
    key.addEventListener("click", () => {
      input.value += key.textContent;
    });
  });
}
