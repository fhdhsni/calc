export default function showHelp(helpObj) {
  console.log(helpObj);
  this.name.textContent = helpObj.name;
  this.category.textContent = helpObj.category;
  this.description.textContent = helpObj.description;

  // loop begins from the end of syntax array
  for (let i = helpObj.syntax.length - 1; i >= 0; i -= 1) {
    const syntax = document.createElement("dd");

    syntax.classList.add("syntax");
    syntax.textContent = helpObj.syntax[i];
    this.syntaxDT.insertAdjacentElement("afterend", syntax);
  }

  // loop begins from the end of examples array
  for (let i = helpObj.examples.length - 1; i >= 0; i -= 1) {
    const examples = document.createElement("dd");

    examples.classList.add("examples");
    examples.textContent = helpObj.examples[i];
    this.examplesDT.insertAdjacentElement("afterend", examples);
  }
}
