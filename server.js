import express from "express";
import routes from "./src/routes/postsRouts.js";


// app representa o servidor 
const app = express();
routes(app);

app.listen(3000, () => {
    console.log("Servidor escutando ...");
});



/*// todos os posts
app.get("/posts", async (req, res) => {
    // 200 é um dos códigos http  - codigo de cliente servidor
    // 200 é o código de sucesso (enviei a requiaiçõ, foi recebida e devolvida com sucesso). o status de resposta de 

    // .json express pega o que recebe em resposta e converter em formato pro js trabalhar
    const posts =  await getTodosPosts();
    res.status(200).json(posts);
});

function buscarPostPorID(id){
    // findIndex é um método que percorre o array posts e retorna o índice do primeiro elemento que satisfaz a condição definid
    return posts.findIndex((post) => {
        // verifica se o id é estritamente igual (===) ao id convertido de str p numer
        return post.id === Number(id)
    })
}
// t:id substitui pela variavel 1, 2, 3
app.get("/posts/:id", (req, res) => {

    //Se a URL for /posts/5, então req.params.id será igual a "5" (uma string).
    const index = buscarPostPorID(req.params.id);
    res.status(200).json(posts[index]);
});*/

