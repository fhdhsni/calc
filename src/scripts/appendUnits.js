export default function (div) {
  this.unitContainer.appendChild(div);
  this.unitContainer.style.display = "block"; // _change this_, add a class instead
  this.toggleKeys.click();
}
