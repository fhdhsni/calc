export default function () {
  const inputWrapper = this.inputWrapper;
  const resultWrapper = this.resultWrapper;
  const keyContainer = this.keyContainer;

  this.toggleKeys.addEventListener("click", function () {
    const flag = keyContainer.classList.toggle("display-none");

    resultWrapper.classList.toggle("on-hidden-keys");
    inputWrapper.classList.toggle("on-hidden-keys");

    if (flag) {
      this.textContent = "show keys";
    } else {
      this.textContent = "hide keys";
    }
  });
}
