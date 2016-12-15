  /* eslint-disable no-param-reassign */
export default function closeHelp() {
  function closeHelpElement(evt) {
    let condition = true;

    if (evt.type === "click") {
      condition = evt.target !== this.mathHelp &&
        evt.target !== this.evalKey &&
        evt.target.parentNode !== this.mathHelp;
    }

    if (condition) {
      const syntaxNodes = document.querySelectorAll(".syntax");
      const examplesNode = document.querySelectorAll(".examples");

      this.helpWrapper.classList.remove("on-help");
      document.removeEventListener("click", closeHelpElement);

      for (let i = 0; i < syntaxNodes.length; i += 1) {
        syntaxNodes[i].parentNode.removeChild(syntaxNodes[i]);
      }

      for (let i = 0; i < examplesNode.length; i += 1) {
        examplesNode[i].parentNode.removeChild(examplesNode[i]);
      }
    }
  }
  this.helpWrapper.tabIndex = "-1";  // to make it focusable
  this.helpWrapper.focus();
  this.helpWrapper.addEventListener("click", closeHelpElement.bind(this));
  this.helpWrapper.addEventListener("keypress", closeHelpElement.bind(this));
}
