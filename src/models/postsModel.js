// camada que faz a conexao com o db
import "dotenv/config";
import { ObjectId } from "mongodb";
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
export async function atualizarPost(id, novoPost){
    const db = conexao.db("instabytes");
    const colecao =  db.collection("posts");
    const objID = ObjectId.createFromHexString(id);  // documentação mongo
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost});   //insertOne é da documentação do mongo
}