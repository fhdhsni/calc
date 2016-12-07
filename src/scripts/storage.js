import buildResult from "./buildlResultElement";

export function useStorage() {
  if (localStorage.getItem("userCalcHistory")) {
    console.log("yep there is some stuff");
    console.log(localStorage);
    const userHistoryArray = JSON.parse(localStorage.userCalcHistory);


    for (let i = 0; i < userHistoryArray.length; i += 1) {
      buildResult(userHistoryArray[i].mathExpression,
                  undefined,
                  undefined,
                  userHistoryArray[i].tag);
    }
  }
}

export function setStorage() {
  const results = document.querySelectorAll(".result");
  const userHistoryArray = [];

  for (let i = 0; i < results.length; i += 1) {
    userHistoryArray[i] = {};
    userHistoryArray[i].tag = results[i].querySelector("input").value;
    userHistoryArray[i].mathExpression = results[i].querySelector("article").textContent;
  }
  localStorage.userCalcHistory = JSON.stringify(userHistoryArray);
}
