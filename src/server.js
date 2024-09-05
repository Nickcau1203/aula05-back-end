import express from 'express'
import { config } from 'dotenv'

import routes from "./routes/index.routes.js";

config();

const serverPort = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(routes);


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



app.listen(serverPort, () => {
    console.log(`💖 Server started on http://localhost:${serverPort}`)
});