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

export default app;
