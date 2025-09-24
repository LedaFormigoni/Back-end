import express from "express";
import cors from "cors";
import { listaProdutos } from "../Back-end/front-end/produtos.js";

const app = express();

app.use(cors());
app.use(express.json());

let listaPessoas = [
  { id: 1, nome: "Bruno", idade: 26 },
  { id: 2, nome: "Bruno", idade: 16 },
  { id: 3, nome: "Arthur", idade: 16 },
  { id: 4, nome: "Arthur", idade: 16 },
  { id: 5, nome: "Leda", idade: 17},   
];

app.get("/perfil", (requisicao, resposta) => {
    return resposta.status(200).json(listaProdutos);       
});

app.listen(3000, () => {
  console.log("No ar!");
});

