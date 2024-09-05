import { Router } from "express";

import emocoesRoutes from "./emocoes.routers.js"

const routes = Router();

routes.get("/", (req, res) => {
    return res.status(200).send({ message: "Hello, World!" })
})

export default routes;