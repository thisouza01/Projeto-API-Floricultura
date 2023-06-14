import express from 'express';
import routes from "./routes/index.js";

const app = express();
app.use(express.json());
routes(app);

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
