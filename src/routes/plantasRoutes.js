import express from "express";

const router = express.Router();

router

    .get('/plantas', (req, res) => {
        try {
            res.status(200).send('todas as plantas')
        } catch (err) {
            if(err) {
                res.status(400).send(err)
            }
        }
    })

    .get('/plantas/:id', (req, res) => {
        try {
            const id = req.params.id;
            res.status(200).send(`plantas:${id}`)
        } catch (err) {
            if(err) {
                res.status(400).send(err)
            }
        }
    })
    
    .post('/plantas', (req, res) => { 
        try {
            res.status(201).send('Planta cadastrada!')
        } catch (err) {
            if(err) {
                res.status(500).send(err)
            }
        }
    })
    
    .put('/plantas/:id', (req, res) => {
        try {
            const id = req.params.id;
            res.status(200).send('Planta atualizada com sucesso! : ', id)
        } catch (err) {
            if(err) {
                res.status(500).send(err)
            }
        }
    })
    
    .delete('/plantas/:id', (req, res) => {
        try {
            const id = req.params.id;
            res.status(200).send('Planta removida com sucesso! : ', id)
        }catch (err) {
            if(err) {
                res.status(500).send(err)
            }
        }
    })

export default router;