// camada que faz a conexao com o db
import conectarAoBanco from "../config/dbconfig.js";


const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosPosts(){
    const db = conexao.db("instabytes");
    const colecao =  db.collection("posts");
    // fui no db e peguei uma coleção chamada posts 
    return colecao.find().toArray();
}

export async function criarPost(novoPost){
    const db = conexao.db("instabytes");
    const colecao =  db.collection("posts");
    // retornei o novo post
    return colecao.insertOne(novoPost);    //insertOne é da documentação do mongo
}