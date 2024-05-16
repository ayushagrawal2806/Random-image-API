const express = require("express");
const images = require("./image.json");
const app = express();
const PORT = 8000;

app.get("/api/image/random", (req, res) => {
  const randomImage =
    images.results[Math.floor(Math.random() * images.results.length)].urls.raw;
  return res.json({ photo: randomImage });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
