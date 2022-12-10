const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(
  cors({
    orgin: "*",
  })
);
app.use(express.json());

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log(`Listening on port ${9000}!`));

app.get("/api/test", (req, res) => res.send({ message: "Hello" }));
