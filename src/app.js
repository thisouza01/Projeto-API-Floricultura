import express from 'express';
import db from "./config/dbConnect.js"
import routes from "./routes/index.js";
import "dotenv/config";

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
    console.log("conexão com o banco, feita com sucesso!")
});

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
