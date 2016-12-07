export default function closeHelp(mathHelp, evalKey, helpWrapper) {
  function closeHelpElement(evt) {
    if (evt.target !== mathHelp && evt.target !== evalKey) {
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

  document.addEventListener("click", closeHelpElement);
}
