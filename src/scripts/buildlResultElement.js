/* eslint max-len: off */
export default function (mathExpression, resultValue) {
  const div = document.createElement("div");
  const docFrag = document.createDocumentFragment();
  const resultElement = document.querySelector(".result-wrapper");

  docFrag.appendChild(div);
  docFrag.querySelector("div").innerHTML = `<article class="result translate"><input class="tag" type="text" placeholder="tag"/><article class="math-expression">${mathExpression} &nbsp;= &nbsp;${resultValue}</article><button class="delete">remove</button></article>`;

  resultElement.appendChild(docFrag.querySelector("div").firstChild);
}
