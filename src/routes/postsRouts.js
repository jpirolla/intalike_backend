import express from "express"
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem } from "../controllers/postsController.js";

const upload = multer({dest: "./uploads"});

const routes  = (app) => {
    // devolver json 
    app.use(express.json());
    app.get("/posts", listarPosts); // puxar um recurso
    app.post("/posts", postarNovoPost ); //enviar um dados
    app.post("/upload", upload.single("imagem"), uploadImagem);
};

export default routes; 