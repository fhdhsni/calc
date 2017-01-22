export default function () {
  this.convertor.addEventListener("click", () => {
    this.sidebarEl.classList.add("showup");
    this.bg.classList.add("show");
  });
  this.bg.addEventListener("click", () => {
    this.sidebarEl.classList.remove("showup");
    this.bg.classList.remove("show");
  });
}
