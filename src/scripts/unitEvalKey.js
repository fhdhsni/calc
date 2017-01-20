export default function () {
  document.querySelector(".unit-evaluate").addEventListener("click", () => {
    const from = document.querySelector("select.from").value;
    const to = document.querySelector("select.to").value;
    const number = document.querySelector(".number").value;
    const mathExpression = `${number} ${from} in ${to}`;

    this.input.value = mathExpression;
    this.evalKey.click();
  });
}
