/* eslint max-len: off */
/* eslint no-param-reassign: ["error", { "props": false }]*/
import { setStorage } from "./storage";

export default function build(
  mathExpression,
  { resultValue = "", resultWrapper = document.querySelector(".result-wrapper"), tag = "" } = {}) {
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
  docFrag.querySelector("input").addEventListener("change", () => {
    // to respect tag value while storing user history
    setStorage();
  });
  resultWrapper.appendChild(docFrag.querySelector("div").firstChild);
  resultWrapper.scrollTop = resultWrapper.scrollHeight;
  resultWrapper.lastChild.classList.remove("translate"); // kickoff slide animation
}
