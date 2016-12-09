  /* eslint-disable no-param-reassign */
export default function closeHelp(mathHelp, evalKey, helpWrapper) {
  function closeHelpElement(evt) {
    let condition = true;

    if (evt.type === "click") {
      condition = evt.target !== mathHelp &&
        evt.target !== evalKey &&
        evt.target.parentNode !== mathHelp;
    }

    if (condition) {
      const syntaxNodes = document.querySelectorAll(".syntax");
      const examplesNode = document.querySelectorAll(".examples");

      helpWrapper.classList.remove("on-help");
      document.removeEventListener("click", closeHelpElement);

      for (let i = 0; i < syntaxNodes.length; i += 1) {
        syntaxNodes[i].parentNode.removeChild(syntaxNodes[i]);
      }

      for (let i = 0; i < examplesNode.length; i += 1) {
        examplesNode[i].parentNode.removeChild(examplesNode[i]);
      }
    }
  }

  helpWrapper.tabIndex = "-1";  // to make it focusable
  helpWrapper.focus();
  helpWrapper.addEventListener("click", closeHelpElement);
  helpWrapper.addEventListener("keypress", closeHelpElement);
}
