import Menu from "./Menu.js";
import Order from "./Order.js";
import Router from "./Router.js";

// Request Persistence Storage

window.addEventListener("DOMContentLoaded", () => {
  Router.init();
  Menu.load();
  Order.render();
});
