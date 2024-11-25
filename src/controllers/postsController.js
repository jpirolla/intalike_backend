// o controller é uma camada padrão que passamos a responsabilidade
// de lidar com requisição e respostas (res, req)

import { json } from "express";
import { getTodosPosts, criarPost, atualizarPost} from "../models/postsModel.js";
import fs from "fs"
import gerarDescricaoComGemini from "../services/geminiService.js";

export async function listarPosts(req, res){
    const posts =  await getTodosPosts();
    res.status(200).json(posts);
}

export async function postarNovoPost(req, res) {
    const novoPost = req.body;

    try {
        // agora mando o body
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado);
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro": "Falha na requisição"});
    }
}

export async function uploadImagem(req, res) {
    const novoPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    };

    try {
        // agora mando o body
        const postCriado = await criarPost(novoPost);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`
        fs.renameSync(req.file.path, imagemAtualizada)
        res.status(200).json(postCriado);
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro": "Falha na requisição"});
    }
}

export async function atualizarNovoPost(req, res) {
    // as infos chegam através da requisição 
    const id = req.params.id;
    const urlImagem = `http://localhost:3000/${id}.png`
    
    try{
        const imgbuffer = fs.readFileSync(`uploads/${id}.png`)
        const descricao = await gerarDescricaoComGemini(imgbuffer)

        const post = {
            imgUrl: urlImagem,
            descricao: descricao,
            alt: req.body.alt
        }
    
        const postCriado = await atualizarPost(id, post);
        res.status(200).json(postCriado);
    } catch(erro){ 
        console.erro(erro.message);
        res.status(500).json({"Erro": "Falha na requisição"})
    }
}
    /*
    try {
        const imgBuffer = fs.readFileSync(`uploads/${id}.png`)
        const descricao = await gerarDescricaoComGemini(imgBuffer)

        const post = {
            imgUrl: urlImagem,
            descricao: descricao,
            alt: req.body.alt
        }

        const postCriado = await atualizarPost(id, post);
        res.status(200).json(postCriado);  
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"});
    }
}
*/
