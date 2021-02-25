const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json());

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  if (type === "CommentCreated") {
    console.log(data);
  }
});

app.listen(4003, () => console.log("server on in 4003"));
