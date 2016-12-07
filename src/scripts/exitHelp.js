export default function exitHelp(mathHelp, evalKey, helpWrapper) {
  function closeHelpElement(evt) {
    console.log(evt.target);
    if (evt.target !== mathHelp && evt.target !== evalKey) {
      const syntaxNodes = document.querySelectorAll(".syntax");
      const examplesNode = document.querySelectorAll(".examples");

      console.log("here none display");
      /* eslint-disable */
      helpWrapper.classList.remove("on-help");
      /* eslint-enable */
      document.removeEventListener("click", closeHelpElement);

      for (let i = 0; i < syntaxNodes.length; i += 1) {
        syntaxNodes[i].parentNode.removeChild(syntaxNodes[i]);
      }

      for (let i = 0; i < examplesNode.length; i += 1) {
        examplesNode[i].parentNode.removeChild(examplesNode[i]);
      }
    }
  }

  document.addEventListener("click", closeHelpElement);
}
