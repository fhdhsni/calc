/* eslint-disable no-param-reassign */

export default function closeHelp() {
  function closeHelpElement(evt) {
    let condition = true;

    if (evt.type === "click") { // where did this click happen?
      condition = evt.target !== this.mathHelp && // <dl class="math-help">
      evt.target !== this.evalKey &&              // <button class="evaluate">evaluate</button>
      evt.target.parentNode !== this.mathHelp;    // children of mathHelp
    }

    if (condition) {
      this.helpWrapper.classList.remove("on-help");
      this.removeHelpElements();     //  remove stuff from previous showed help
    }
  }
  this.helpWrapper.addEventListener("click", closeHelpElement.bind(this));
  this.helpWrapper.addEventListener("keypress", closeHelpElement.bind(this));
}
