import express from "express";

// app representa o servidor 
const app = express();

// falar pro servidor subir 
    // escute a porta 30000, que é padrão para um servidor local 
app.listen(3000, () => {
    console.log("Servidor escutando ...");
});

// criei uma rota eno status 200 enviei a mensagem "Rota inicial"
app.get("/api", (req, res) => {
    res.status(200).send("Rota inicial");
});

