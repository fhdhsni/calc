export default function () {
  this.convertor.addEventListener("click", () => {
    this.sidebarEl.classList.add("showup");
    this.bg.classList.add("show");
  });
  document.body.addEventListener("click", (evt) => {
    const target = evt.target;

    if (target === this.bg) {
      this.sidebarEl.classList.remove("showup");
      this.bg.classList.remove("show");
    }
  });
}

