const express = require("express");
const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.static(__dirname));

server.get("/prijava", (req, res) => {
  console.log("Doslo je do prijave");
  res.sendFile(__dirname + "/prijava.html");
});

server.listen(6500, () => {
  console.log(`Server pokrenut na portu: ${6500}`);
});
