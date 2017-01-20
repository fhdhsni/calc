export default function (array) {
  let options = "";
  const div = document.createElement("div");

  div.innerHTML = `
      <input type="number" class="number"/>
      <select class="from" name="units">
      </select>
      <span class="in">in</span>
      <select class="to" name="units">
      </select>
      <button class="unit-evaluate">evaluate</button>`;
  for (let i = 0; i < array.length; i += 1) {
    options += `<option value="${array[i].value}">${array[i].text}</option>`;
  }
  div.querySelector(".from").innerHTML = options;
  div.querySelector(".to").innerHTML = options;

  return div;
}
