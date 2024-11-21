import express from "express"
import { listarPosts } from "../controllers/postsController.js";

const routes  = (app) => {
    // devolver json 
    app.use(express.json());
    // todos os posts
    app.get("/posts", listarPosts);

};

export default routes; 