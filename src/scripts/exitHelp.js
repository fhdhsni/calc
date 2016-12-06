export default function exitHelp(mathHelp, evalKey, helpWrapper) {
  const closeHelpElement = (evt) => {
    console.log(evt.target);
    console.log(mathHelp.style.display);
    if (mathHelp.style.display === "block" && evt.target !== mathHelp && evt.target !== evalKey) {
      const syntaxNodes = document.querySelectorAll(".syntax");
      const examplesNode = document.querySelectorAll(".examples");

      console.log("here none display");
      /* eslint-disable */
      mathHelp.style.display = "none";
      helpWrapper.classList.toggle("on-help");
      /* eslint-enable */
      document.removeEventListener("click", closeHelpElement);
      for (let i = 0; i < syntaxNodes.length; i += 1) {
        syntaxNodes[i].parentNode.removeChild(syntaxNodes[i]);
      }

      for (let i = 0; i < examplesNode.length; i += 1) {
        examplesNode[i].parentNode.removeChild(examplesNode[i]);
      }
    }
  };

  document.addEventListener("click", closeHelpElement);
}
