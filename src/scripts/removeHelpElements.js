export default function () {
  const syntaxNodes = document.querySelectorAll(".syntax");
  const examplesNode = document.querySelectorAll(".examples");

  for (let i = 0; i < syntaxNodes.length; i += 1) {
    syntaxNodes[i].parentNode.removeChild(syntaxNodes[i]);
  }

  for (let i = 0; i < examplesNode.length; i += 1) {
    examplesNode[i].parentNode.removeChild(examplesNode[i]);
  }
}
