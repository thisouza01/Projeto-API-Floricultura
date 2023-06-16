import express from "express";
import PlantaController from "../controllers/plantasController.js";

const router = express.Router();

router
    .get('/plantas', PlantaController.listarPlantas)
    .get('/plantas/:id', PlantaController.listarPlantasPorId)
    .post('/plantas', PlantaController.cadastrarPlantas)
    .put('/plantas/:id', PlantaController.atualizarPlantas)
    .delete('/plantas/:id', PlantaController.excluirPlantas)

export default router;