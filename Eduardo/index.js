import express from "express";
import noticias from "./noticias.json" assert { type: "json" };
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 1337;

app.use([
  express.static("./views/public"),
  bodyParser.urlencoded({ extended: true }),
]);

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}.`);
});

app.get("/", (req, res) => {
  res.render("index.ejs", { noticias: noticias.noticia });
});

app.get("/index.ejs", (req, res) => {
  res.redirect("/");
});

app.get("/sobre", (req, res) => {
  res.render("pages/sobre.ejs");
});

app.get("/agendamento", (req, res) => {
  res.render("pages/agendamento.ejs");
});

app.get("/servicos", (req, res) => {
  res.render("pages/servicos.ejs");
});

app.get("/contato", (req, res) => {
  res.render("pages/contato.ejs");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.render("pages/agendamento.ejs", { nome: req.body["nome"].split(" ")[0] });
});
