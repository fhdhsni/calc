export default function () {
  const bg = document.querySelector(".bg");

  this.convertor.addEventListener("click", () => {
    this.sidebarEl.classList.add("showup");
    bg.classList.add("show");
  });
  document.body.addEventListener("click", (evt) => {
    const target = evt.target;

    if (target === bg) {
      this.sidebarEl.classList.remove("showup");
      bg.classList.remove("show");
    }
  });
}

