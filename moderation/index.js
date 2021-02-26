const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json());

app.post("/events", async (req, res) => {
  const { type, data } = req.body;
  console.log("mod");
  if (type === "CommentCreated") {
    try {
      const status = data.content.includes("orange") ? "rejected" : "approved";

      await axios.post("http://localhost:4005/events", {
        type: "CommentModerated",
        data: {
          ...data,
          status,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }

  return res.send({});
});

app.listen(4003, () => console.log("server on in 4003"));
