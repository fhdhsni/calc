export default function (toggleKeys, resultWrapper, keyContainer) {
  toggleKeys.addEventListener("click", function () {
    const flag = keyContainer.classList.toggle("display-none");

    resultWrapper.classList.toggle("on-hidden-keys");
    if (flag) {
      this.textContent = "show keys";
    } else {
      this.textContent = "hide keys";
    }
  });
}