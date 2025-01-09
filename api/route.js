

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/signup", (req, res) => {
  const body = req.body;
});

app.post("signin", (req, res) => {
  const body = req.body;
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});