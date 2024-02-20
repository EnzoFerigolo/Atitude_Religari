import express from "express";
import noticias from "./noticias.json" assert { type: "json" };

const app = express();
const port = 3000;

app.use(express.static("./views/public"));

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
