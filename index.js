const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Send to youuuuuuuu kutaaaa vauvau pam pam vur vur");
});

const songs = [
  { id: 1, name: "XXXtentacion", email: "xxx@gmail.com" },
  { id: 2, name: "Juice", email: "juice@gmail.com" },
  { id: 3, name: "Weeknd", email: "weeknd@gmail.com" },
  { id: 4, name: "Lil uzi", email: "uzi@gmail.com" },
  { id: 5, name: "SKi mask", email: "mask@gmail.com" },
  { id: 6, name: "Lil wayne", email: "wayne@gmail.com" },
  { id: 7, name: "Roddy Richh", email: "roddy@gmail.com" },
];

app.get("/songs", (req, res) => {
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = songs.filter((song) =>
      song.name.toLowerCase().includes(search)
    );
    res.send(matched);
  } else {
    res.send(songs);
  }
});

app.get("/song/:id", (req, res) => {
  const id = req.params.id;
  const song = songs.find((song) => song.id == id);
  res.send(song);
});

app.post("/song", (req, res) => {
  console.log("request", req.body);
  const song = req.body;
  song.id = songs.length + 1;
  songs.push(song);
  res.send(song);
});

app.listen(port, () => {
  console.log("listening", port);
});
