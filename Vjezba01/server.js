const express = require("express");
const server = express();

server.use(express.urlencoded({ extended: true }));

server.use("/", (req, res) => {
  res.redirect("/prijava");
});

server.get("/prijava", (req, res) => {});

server.listen(5000, () => {
  console.log(`Server pokrenut na portu: ${5000}`);
});
