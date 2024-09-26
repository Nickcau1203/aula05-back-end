import { Router } from "express"

const personagensRoutes = Router()

let personagens = [
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

//Rota para buscar todas as personagens 
personagensRoutes.get("/", (req, res) => {
    return res.status(200).send(personagens)
});

//Criar um novo personagem
personagensRoutes.post("/", (req, res) => {
    const {nome, studio, vivo} = req.body
    const novoPersonagem = {
      id: personagens.length + 1,
      nome: nome,
      studio: studio,
      vivo: vivo,
    };
    personagens.push(novoPersonagem);
    return res.status(201).send(novoPersonagem);
  });


  //Deletar um personagem por id
  personagensRoutes.delete("/:id", (req, res) => {
    const { id } = req.params;

    const personagem = personagens.find((person) => person.id == id ) 

    if (!personagem) {  
        return res.status(404).send({
            message: "Personagem não encontrada!",
        });
    }

    personagens = personagens.filter((person) => person.id != id );


    return res.status(200).send({
        message: "Personagen deletada!",
        personagem,
    });
});

export default personagensRoutes;