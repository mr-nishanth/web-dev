import repl from "repl";

const local = repl.start("node-server $ ");

local.on("exit", () => {
  console.log(`Exiting REPL 😤`);
  process.exit(1);
});
