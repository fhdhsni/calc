export default function () {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/calc/sw.js").then((reg) => {
      /* eslint-disable no-param-reassign, indent */
      reg.onupdatefound = function () {
        const installingWorker = reg.installing;

        installingWorker.onstatechange = function () {
          switch (installingWorker.state) {
          case "installed":
            if (navigator.serviceWorker.controller) {
              console.log("New or updated content is available.");
            } else {
              console.log("Content is now available offline!");
              const div = document.createElement("div");

              div.innerHTML =
                "<div class=\"offline-available\">Calc is now available for offline usage.</div>";
              document.body.appendChild(div);
              setTimeout(() => {
                div.remove();
              }, 2000);
            }
            break;
          case "redundant":
            console.error("The installing service worker became redundant.");
            break;
          default:
            console.log("¯\\_(ツ)_/¯");
          }
        };
      };
    }).catch((e) => {
      console.error("Error during service worker registration:", e);
    });
  }
}
