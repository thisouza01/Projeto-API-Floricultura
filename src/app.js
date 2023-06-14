import express from 'express';

// INDEX - ROUTER

const app = express();

app.use(express.json())

// ROUTER

app.get('/', (req, res) => {
        res.status(200).send('Bem Vindo a Floricultura!')
})

app.get('/all', (req, res) => {
    try {
        res.status(200).json('produtos')
    } catch (err) {
        if(err) {
            res.status(400).send(err)
        }
    }
})

// PLANTA

app.get('/plantas', (req, res) => {
    try {
        res.status(200).send('todas as plantas')
    } catch (err) {
        if(err) {
            res.status(400).send(err)
        }
    }
})

app.get('/plantas/:id', (req, res) => {
    try {
        const id = req.params.id;
        res.status(200).send(`plantas:${id}`)
    } catch (err) {
        if(err) {
            res.status(400).send(err)
        }
    }
})

app.post('/plantas', (req, res) => { 
    try {
        res.status(201).send('Planta cadastrada!')
    } catch (err) {
        if(err) {
            res.status(500).send(err)
        }
    }
})

app.put('/plantas/:id', (req, res) => {
    try {
        const id = req.params.id;
        res.status(200).send('Planta atualizada com sucesso! : ', id)
    } catch (err) {
        if(err) {
            res.status(500).send(err)
        }
    }
})

app.delete('/plantas/:id', (req, res) => {
    try {
        const id = req.params.id;
        res.status(200).send('Planta removida com sucesso! : ', id)
    }catch (err) {
        if(err) {
            res.status(500).send(err)
        }
    }
})


// VASOS

app.get('/vasos', (req, res) => {
    try {
        res.status(200).send('Todos Os Vasos')
    } catch (err) {
        if(err) {
            res.status(400).semd(err)
        }
    }
})

app.get('/vasos/:id', (req, res) => {
    try {
        const id = req.params.id;
        res.status(400).send(`Vasos:${id}`)
    } catch (err) {
        if(err) {
            res.status(400).send(err)
        }
    }
})

app.post('/vasos', (req, res) => {
    try {
        res.status(201).send('Vaso cadastrado!')
    } catch (err) {
        if(err) {
            res.status(500).send(err)
        }
    }
})

app.put('/vasos/:id', (req,res) => {
    try {
        const id = req.params.id;
        res.status(200).send('Vaso atualizado com sucesso" : ', id)
    } catch (err) {
        if(err) {
            res.status(500).send(err)
        }
    }
})

app.delete('/vasos/:id', (req, res) => {
    try {
        const id = req.params.id;
        res.status(200).send('Vaso removido com sucesso! : ', id)
    } catch (err) {
        if(err) {
            res.status(500).send(err)
        }
    }
})


export default app;
