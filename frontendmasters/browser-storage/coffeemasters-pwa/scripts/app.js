import Menu from "./Menu.js";
import Order from "./Order.js";
import Router from "./Router.js";

// Request Persistence Storage
(async function () {
  if (navigator.storage && navigator.storage.persist) {
    if (!(await navigator.storage.persisted())) {
      const result = await navigator.storage.persist();
      console.log(`Was Persistent Storage Request granted? ${result}`);
    } else {
      console.log(`Persistent Storage already granted`);
    }
  }
})();

window.addEventListener("DOMContentLoaded", () => {
  Router.init();
  Menu.load();
  Order.render();
});
