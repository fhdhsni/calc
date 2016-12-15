export default function () {
  const keys = document.querySelectorAll(".right-keys .need-tooltip");
  const nthRoot = this.nthRoot;

  nthRoot.addEventListener("mouseover", function () {
    setTimeout(() => {
      this.classList.add("tooltip");
      this.style.textIndent = "0";
      this.textContent = "";
      setTimeout(() => {
        this.classList.remove("tooltip");
        this.style.textIndent = "-9999px";
        this.textContent = "nthRoot";
      }, 1200);
    }, 500);
  });

  for (let i = 0; i < keys.length; i += 1) {
    keys[i].addEventListener("mouseover", function () {
      setTimeout(() => {
        this.classList.add("tooltip");
        setTimeout(() => this.classList.remove("tooltip"), 1200);
      }, 500);
    });
  }
}
