const express = require("express"); //for install => npm i express
const notes = require("./data/notes");
const dotenv = require("dotenv");
const cors = require('cors')

dotenv.config();
const app = express();

app.use(urlencoded({ extended: true })); 

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://frontend-site1-6jqiqwso7-amirhossein-k.vercel.app");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

res.setHeader("Access-Control-Allow-Origin", "*");


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Listening on port ${8000}!`));

app.get("/api/test", (req, res) => res.send({ message: "Hello" }));

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((item) => item._id === req.params.id);
  res.send(note);
});
