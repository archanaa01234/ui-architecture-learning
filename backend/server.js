const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const documentTypes = [
  {
    id: 1,
    name: "Invoice"
  },
  {
    id: 2,
    name: "Contract"
  },
  {
    id: 3,
    name: "Resume"
  }
];

app.get("/documentTypes", (req, res) => {

  console.log("GET /documentTypes");

  setTimeout(() => {

    res.json(documentTypes);

  }, 500);

});

app.listen(3000, () => {

  console.log("Server running on port 3000");

});