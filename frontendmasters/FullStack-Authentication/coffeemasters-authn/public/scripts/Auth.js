import API from "./API.js";
import Router from "./Router.js";

const Auth = {
  isLoggedIn: false,
  account: null,

  postLogin: async (response, user) => {
    if (response.ok) {
      Auth.isLoggedIn = true;
      Auth.account = user;
      Auth.updateStatus();
      Router.go("/account");
    } else {
      alert(response.message);
    }

    // Credentials Management API storage
    //* Our goal auto login
    if (window.PasswordCredential && user.password) {
      const credentials = new PasswordCredential({
        id: user.email,
        password: user.password,
        name: user.name,
      });
      try {
        await navigator.credentials.store(credentials);
      } catch (error) {
        console.log(e);
      }
    }
  },

  loginFromGoogle: async (data) => {
    const response = await API.loginFromGoogle({ credential: data });
    console.log({ loginFromGoogle: response });
    Auth.postLogin(response, {
      name: response.name,
      email: response.email,
    });
  },
  register: async (event) => {
    event.preventDefault();
    const user = {
      name: document.getElementById("register_name").value,
      email: document.getElementById("register_email").value,
      password: document.getElementById("register_password").value,
    };
    const registerResponse = await API.register(user);
    console.log({ registerResponse });
    Auth.postLogin(registerResponse, user);
  },
  login: async (event) => {
    if (event) event.preventDefault();
    const credentials = {
      email: document.getElementById("login_email").value,
      password: document.getElementById("login_password").value,
    };
    const loginResponse = await API.login(credentials);
    console.log({ loginResponse });
    Auth.postLogin(loginResponse, { ...credentials, name: loginResponse.name });
  },

  autoLogin: async () => {
    if (window.PasswordCredential) {
      const credentials = await navigator.credentials.get({ password: true });
      console.log({ password: credentials });
      if (credentials) {
        document.getElementById("login_email").value = credentials.id;
        document.getElementById("login_password").value = credentials.password;
        Auth.login();
      }
    }
  },

  logout: () => {
    Auth.isLoggedIn = false;
    Auth.account = null;
    Auth.updateStatus();
    Router.go("/");

    if (window.PasswordCredential) {
      navigator.credentials.preventSilentAccess();
    }
  },

  updateStatus() {
    if (Auth.isLoggedIn && Auth.account) {
      document
        .querySelectorAll(".logged_out")
        .forEach((e) => (e.style.display = "none"));
      document
        .querySelectorAll(".logged_in")
        .forEach((e) => (e.style.display = "block"));
      document
        .querySelectorAll(".account_name")
        .forEach((e) => (e.innerHTML = Auth.account.name));
      document
        .querySelectorAll(".account_username")
        .forEach((e) => (e.innerHTML = Auth.account.email));
    } else {
      document
        .querySelectorAll(".logged_out")
        .forEach((e) => (e.style.display = "block"));
      document
        .querySelectorAll(".logged_in")
        .forEach((e) => (e.style.display = "none"));
    }
  },
  init: () => {},
};
Auth.updateStatus();
Auth.autoLogin();

export default Auth;

// make it a global object
window.Auth = Auth;
