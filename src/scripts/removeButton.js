import { setStorage } from "./storage";

export default function () {
  // removing .result when '.delete' is clicked;
  // using .resultWrapper instead of adding event listener to every single .delete button
  this.resultWrapper.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
      const toBeRemoved = e.target.parentNode;

      toBeRemoved.addEventListener("transitionend", () => {
        this.removeChild(toBeRemoved);
        setStorage();
      });
      toBeRemoved.classList.add("translate"); // translate animation
    }
  });
}
