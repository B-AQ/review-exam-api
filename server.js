require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
app.use(cors());
const PORT = process.env.PORT || 8000;

app.use(express.json());
const mongoose = require("mongoose");

const { getApi, addFav, getFav, deleteFav, updateFav} = require("./controller/flowers.js");

mongoose.connect(`${process.env.MONGO_URL}/flowers`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => {
  res.send("hi back");
});

app.get("/Api", getApi);
app.post("/add", addFav);
app.get("/fav", getFav);
app.delete("/delete/:id", deleteFav);
app.put('/update/:id',updateFav);

app.listen(PORT, () => {
  console.log(`listening to the server on http://localhost:${PORT}`);
});
