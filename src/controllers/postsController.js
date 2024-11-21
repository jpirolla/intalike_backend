// o controller é uma camada padrão que passamos a responsabilidade
// de lidar com requisição e respostas (res, req)

import { getTodosPosts } from "../models/postsModel.js";

export async function listarPosts(req, res){
    const posts =  await getTodosPosts();
    res.status(200).json(posts);
}