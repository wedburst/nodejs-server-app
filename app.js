const express = require("express");
var hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

//require('hbs');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estatico
app.use(express.static("public"));

// app.get("/", function (req, res) {
//   res.send("Home page");
// });

app.get("/", function (req, res) {
  res.render("home", {
    nombre: "Jhon Abou",
    titulo: "App de Jhon"
  });
});

app.get("/generic", function (req, res) {
  res.render("generic", {
    nombre: "Jhon Abou",
    titulo: "App de Jhon"
  });
});

app.get("/elements", function (req, res) {
  res.render("elements", {
    nombre: "Jhon Abou",
    titulo: "App de Jhon"
  });
});

// app.get("*", function (req, res) {
//   res.send("404 | Page not found");
// });

app.get("*", function (req, res) {
  res.sendFile(__dirname + "/public/404.html");
});

// app.listen(8080);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
