import express from "express";
import plantas from "./plantasRoutes.js";
import vasos from "./vasosRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send("Bem Vindo a Floricultura")
    })

    app.use(
        express.json(),
        plantas,
        vasos
    );
}

export default routes;