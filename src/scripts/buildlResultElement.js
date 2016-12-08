/* eslint max-len: off */
/* eslint no-param-reassign: ["error", { "props": false }]*/

// export default function (mathExpression, resultValue = "", resultWrapper = document.querySelector(".result-wrapper"), tag = "") {
export default function (mathExpression, { resultValue = "", resultWrapper = document.querySelector(".result-wrapper"), tag = "" } = {}) {
  const div = document.createElement("div");
  const docFrag = document.createDocumentFragment();

  docFrag.appendChild(div);
  let markup = `<article class="result translate"><input class="tag" type="text" value="${tag}" placeholder="tag"/><article class="math-expression">${mathExpression}`;

  if (resultValue === "") {
    markup += "</article><button class=\"delete\">remove</button></article>";
  } else {
    markup += ` &nbsp;= &nbsp;${resultValue}</article><button class="delete">remove</button></article>`;
  }

  docFrag.querySelector("div").innerHTML = markup;

  resultWrapper.appendChild(docFrag.querySelector("div").firstChild);
  resultWrapper.scrollTop = resultWrapper.scrollHeight;
  resultWrapper.lastChild.classList.remove("translate"); // kickoff slide animation
}
