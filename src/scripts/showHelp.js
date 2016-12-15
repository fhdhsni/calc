export default function showHelp(helpObj) {
  const syntaxDT = document.querySelector(".syntax-dt");
  const examplesDT = document.querySelector(".examples-dt");
  const name = document.querySelector(".name");
  const category = document.querySelector(".category");
  const description = document.querySelector(".description");

  // these are duplicated with exitHelp, take care of them
  const syntaxNodes = document.querySelectorAll(".syntax");
  // these are duplicated with exitHelp, take care of them
  const examplesNode = document.querySelectorAll(".examples");

  name.textContent = helpObj.name;
  category.textContent = helpObj.category;
  description.textContent = helpObj.description;

  // these are duplicated with exitHelp, take care of them
  for (let i = 0; i < syntaxNodes.length; i += 1) {
    syntaxNodes[i].parentNode.removeChild(syntaxNodes[i]);
  } // these are duplicated with exitHelp, take care of them

  // these are duplicated with exitHelp, take care of them
  for (let i = 0; i < examplesNode.length; i += 1) {
    examplesNode[i].parentNode.removeChild(examplesNode[i]);
  } // these are duplicated with exitHelp, take care of them

  // loop begins from the end of syntax array
  for (let i = helpObj.syntax.length; i >= 0; i -= 1) {
    const syntax = document.createElement("dd");

    syntax.classList.add("syntax");
    syntax.textContent = helpObj.syntax[i];
    syntaxDT.insertAdjacentElement("afterend", syntax);
  }

  // loop begins from the end of  examples array
  for (let i = helpObj.examples.length; i >= 0; i -= 1) {
    const examples = document.createElement("dd");

    examples.classList.add("examples");
    examples.textContent = helpObj.examples[i];
    examplesDT.insertAdjacentElement("afterend", examples);
  }
}
