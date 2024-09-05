import express from 'express'
import { config } from 'dotenv'

import routes from "./routes/index.routes.js";

config();

const serverPort = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(routes);

app.get("/emocoes", (req, res) => {
    return res.status(200).send(emocoes)
})

const personagens = [
    {
        id: 100,
        nome: "Totoro",
        studio: "Ghibil",
        vivo: true
    },

    {
        id: 101,
        nome: "Rapunzel",
        studio: "Disney",
        vivo: true
    },

    {
        id: 102,
        nome: "Bela e a fera",
        studio: "Disney",
        vivo: true
    }
]

app.get("/personagens", (req, res) => {
    return res.status(200).send( personagens )
})

app.post("/emocoes", (req, res) => {
    const { nome, cor } = req.body
    const novaEmocao = {
        id: emocoes.length + 1,
        nome: nome,
        cor: cor
    }
    emocoes.push(novaEmocao)
    return res.status(200).send( emocoes )
})

app.listen(serverPort, () => {
    console.log(`💖 Server started on http://localhost:${serverPort}`)
});