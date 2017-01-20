export default function () {
  const container = this.unitContainer;

  container.addEventListener("click", (evt) => {
    if (evt.target === container) {
      container.style.display = "none";
      container.removeChild(container.firstChild);
      this.toggleKeys.click();
    }
  });
}
