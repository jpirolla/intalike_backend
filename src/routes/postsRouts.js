import express from "express"
import multer from "multer";
import cors from "cors";
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost  } from "../controllers/postsController.js";


const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
};

const upload = multer({dest: "./uploads"});

const routes  = (app) => {
    // devolver json 
    app.use(express.json());
    app.use(cors(corsOptions))
    app.get("/posts", listarPosts); // puxar um recurso
    app.post("/posts", postarNovoPost ); //enviar um dados
    app.post("/uploads", upload.single("imagem"), uploadImagem);
    app.put("/uploads/:id", upload.single("imagem"), atualizarNovoPost);
};

export default routes; 