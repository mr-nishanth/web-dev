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

// Quota Estimation API
(async function () {
  if (navigator.storage && navigator.storage.estimate) {
    const q = await navigator.storage.estimate();
    console.log(`Quota available: ${parseInt(q.quota / 1024 / 1024)}MiB`); // by default measure in bytes
    console.log(`Quota usage: ${q.usage / 1024}KiB`);
  }
})();

window.addEventListener("DOMContentLoaded", () => {
  Router.init();
  Menu.load();
  Order.render();
});
