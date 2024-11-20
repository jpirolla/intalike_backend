import express from "express";

const posts = [
    {
        id: 1,
        descricao: "uma foto teste", 
        imagem: "https://placecats.com/millie/300/188",
    },
    {
        id: 2,
        descricao: "Um gato fofo dormindo",
        imagem: "https://fotos.amomeupet.org/uploads/fotos/1584646206_5e73c83e77041_hd.jpeg"
    },

    {
        id: 3,
        descricao: "Gato assustado",
        imagem: "https://pt.quizur.com/quiz/qual-meme-de-gato-te-representa-563y"
    },
    
    {
        id: 4,
        descricao: "Gato violento",
        imagem: "https://i.pinimg.com/736x/05/49/86/05498664d54894f92c6523c50c1eb9e6.jpg"
    },
    {
        id: 5,
        descricao: "Gato joia",
        imagem: "https://i.pinimg.com/736x/f3/bf/49/f3bf49b950a8bcf11ef552f970f56c66.jpg"
    }
];

// app representa o servidor 
const app = express();

// devolver json - indicar que nossa app usa essa funcionalidade de converter a estrutura em json
app.use(express.json());

// falar pro servidor subir 
    // escute a porta 30000, que é padrão para um servidor local 
app.listen(3000, () => {
    console.log("Servidor escutando ...");
});

// todos os posts
app.get("/posts", (req, res) => {
    // 200 é um dos códigos http  - codigo de cliente servidor
    // 200 é o código de sucesso (enviei a requiaiçõ, foi recebida e devolvida com sucesso). o status de resposta de 

    // .json express pega o que recebe em resposta e converter em formato pro js trabalhar
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
});

