import app from "../app.js";

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send("Bem Vindo a Floricultura")
    })
}

export default routes;