import express from "express";
import VasoController from "../controllers/vasosController";

const router = express.Router();
 
router
    .get('/vasos', VasoController.listarVasos)
    .get('/vasos/:id', VasoController.listarVasosPorId)
    .post('/vasos', VasoController.cadastrarVasos)
    .put('/vasos/:id', VasoController.atualizarVasos)
    .delete('/vasos/:id', VasoController.excluirVasos)

export default router;