import express from "express";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import * as url from "url";
import bcrypt from "bcryptjs";
import * as jwtJsDecode from "jwt-js-decode";
import base64url from "base64url";
import SimpleWebAuthnServer from "@simplewebauthn/server";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const app = express();
app.use(express.json());

const adapter = new JSONFile(__dirname + "/auth.json");
const db = new Low(adapter);
await db.read();
db.data ||= { users: [] };

const rpID = "localhost";
const protocol = "http";
const port = 5050;
const expectedOrigin = `${protocol}://${rpID}:${port}`;

app.use(express.static("public"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// =================================================================
function findUser(email) {
  const results = db.data.users.filter((user) => user.email === email);
  if (results.length === 0) return undefined;
  return results[0];
}

// ADD HERE THE REST OF THE ENDPOINTS
app.post("/auth/register", (req, res) => {
  // TODO: Data Validation

  const salt = bcrypt.genSaltSync(10);
  const hashedPass = bcrypt.hashSync(req.body.password, salt);

  const user = {
    name: req.body.name,
    email: req.body.email,
    password: hashedPass,
  };

  const userFound = findUser(user.email);
  if (userFound) {
    // User already registered
    res.send({ ok: false, message: "User already registered" });
  } else {
    // New User
    db.data.users.push(user);
    db.write();
    res.send({ ok: true });
  }
});

app.post("/auth/login", (req, res) => {
  const userFound = findUser(req.body.email);
  if (userFound) {
    // Check Password
    if (bcrypt.compareSync(req.body.password, userFound.password)) {
      res.send({
        ok: true,
        message: "Login Successfully",
        name: userFound.name,
        email: userFound.email,
      });
    } else {
      res.send({ ok: false, message: "Credentials Invalid" });
    }
  } else {
    // User not found
    res.send({ ok: false, message: "Credentials Invalid" });
  }
});

// SignIn With Google
app.post("/auth/login-google", (req, res) => {
  let jwt = jwtJsDecode.jwtDecode(req.body.credential);
  let payload = jwt.payload;
  let user = {
    email: payload.email,
    name: payload.given_name + " " + payload.family_name,
    password: false,
  };
  const userFound = findUser(user.email);

  if (userFound) {
    // User exists, we update it with the Google data
    user.federated = { google: payload.aud };
    db.write();
    res.send({ ok: true, name: user.name, email: userFound.email });
  } else {
    // User doesn't exist we create it
    db.data.users.push({
      ...user,
      federated: {
        google: payload.aud,
      },
    });
    db.write();
    res.send({ ok: true, name: user.name, email: user.email });
  }
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "public/index.html");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
