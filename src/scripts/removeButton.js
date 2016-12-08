import { setStorage } from "./storage";

export default function (resultWrapper) {
  // removing .result when '.delete' is clicked;
  // using .resultWrapper instead of adding event listener to every single .delete button
  resultWrapper.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
      const toBeRemoved = e.target.parentNode;

      toBeRemoved.classList.add("translate"); // translate animation
      setTimeout(() => {         // making enough time for translate animation
        this.removeChild(toBeRemoved);
        setStorage();
      }, 300);
    }
  });
}
