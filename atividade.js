
import express from "express" //! importa a biblioteca

const app = express();  //ligando o fremework 

let listaPessoa = [
    { id: 1, nome: "Bruno", idade: 30 },
    { id: 2, nome: "Ana", idade: 25 },
    { id: 3, nome: "Carlos", idade: 28 }, //array de objetos
    { id: 4, nome: "Mariana", idade: 22 },
];

app.get("/perfil/:id", (requisicao, resposta) => { //criando uma rota do tipo get
//    let codigo  = requisicao.params.id; //pegando o id da requisicao
   const { id } = requisicao.params; //pegando o id da requisicao

   let pessoa = listaPessoa.forEach((pessoa) => { //percorrendo o array de objetos
        if (pessoa.id == id) { //se o id for igual ao id da requisicao
            return pessoa; //retornando a pessoa encontrada
        }
   });

   return resposta.send(`Ola pessoa codigo: ${id}`) //retornando uma resposta
   //return resposta.send(`Ola... ${id}`) //retornando uma resposta com o id
});


app.listen(3000,()=>{  //! ligando o servidor na porta 3000
    console.log("No Ar!");    //so conferindo se esta funcionando
})