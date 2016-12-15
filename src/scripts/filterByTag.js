export default function filterByTag() {
  this.filterInput.addEventListener("keyup", () => {
    const allResults = document.querySelectorAll(".result");

    for (let i = 0; i < allResults.length; i += 1) {
      const result = allResults[i];
      const tag = result.querySelector("input");

      if (tag.value.toLowerCase().search(this.filterInput.value.toLowerCase()) === -1) {
        result.classList.add("result-hidden");
      } else {
        result.classList.remove("result-hidden");
      }
    }
  });
}
