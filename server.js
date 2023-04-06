const express = require("express");
const app = express();
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.get("/tshirt", (req, res) => {
  res.status(200).send("Hello World!");
});

app.post("/tshirt/:id", (req, res) => {
  const { id } = req.params;
});
