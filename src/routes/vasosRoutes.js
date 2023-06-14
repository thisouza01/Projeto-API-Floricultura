import express from "express";

const router = express.Router();

router
    .get('/vasos', (req, res) => {
        try {
            res.status(200).send('Todos Os Vasos')
        } catch (err) {
            if(err) {
                res.status(400).semd(err)
            }
        }
    })

    .get('/vasos/:id', (req, res) => {
        try {
            const id = req.params.id;
            res.status(400).send(`Vasos:${id}`)
        } catch (err) {
            if(err) {
                res.status(400).send(err)
            }
        }
    })

    .post('/vasos', (req, res) => {
        try {
            res.status(201).send('Vaso cadastrado!')
        } catch (err) {
            if(err) {
                res.status(500).send(err)
            }
        }
    })

    .put('/vasos/:id', (req,res) => {
        try {
            const id = req.params.id;
            res.status(200).send('Vaso atualizado com sucesso" : ', id)
        } catch (err) {
            if(err) {
                res.status(500).send(err)
            }
        }
    })

    .delete('/vasos/:id', (req, res) => {
        try {
            const id = req.params.id;
            res.status(200).send('Vaso removido com sucesso! : ', id)
        } catch (err) {
            if(err) {
                res.status(500).send(err)
            }
        }
    })

export default router;