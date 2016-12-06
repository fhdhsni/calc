export default function showhelp(helpObj) {
  const syntaxDT = document.querySelector(".syntax-dt");
  const examplesDT = document.querySelector(".examples-dt");
  const name = document.querySelector(".name");
  const category = document.querySelector(".category");
  const description = document.querySelector(".description");

  name.textContent = helpObj.name;
  category.textContent = helpObj.category;
  description.textContent = helpObj.description;

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
