// camada que faz a conexao com o db
import conectarAoBanco from "../config/dbconfig.js";


const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosPosts(){
    const db = conexao.db("instabytes");
    // fui no db e peguei uma coleção chamada posts 
    const colecao =  db.collection("posts");
    return colecao.find().toArray();
}