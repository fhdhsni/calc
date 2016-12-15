  /* eslint-disable no-param-reassign */
import removeHelpElements from "./removeHelpElements";

export default function closeHelp() {
  function closeHelpElement(evt) {
    let condition = true;

    if (evt.type === "click") {
      condition = evt.target !== this.mathHelp &&
        evt.target !== this.evalKey &&
        evt.target.parentNode !== this.mathHelp;
    }

    if (condition) {
      this.helpWrapper.classList.remove("on-help");
      removeHelpElements();     //  remove stuff from previous showed help
    }
  }
  this.helpWrapper.addEventListener("click", closeHelpElement.bind(this));
  this.helpWrapper.addEventListener("keypress", closeHelpElement.bind(this));
}
