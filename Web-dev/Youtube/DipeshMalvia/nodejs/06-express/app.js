require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT ?? 3600;
app.use("/", require("./routes/root.routes"));
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
