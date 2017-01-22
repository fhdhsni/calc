export default function (div, key) {
  let firstTime = true;
  // because we don't want to run
  // addEventListener for eval key more
  // than once

  key.addEventListener("click", () => {
    this.appendUnits(div);
    if (firstTime) {
      this.unitKeyEval();
      firstTime = false;
    }
    this.bg.click();            // to hide the side bar
  });
}
