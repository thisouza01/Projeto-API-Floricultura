import plantas from "../model/Planta.js";

class PlantaController {

    static listarPlantas = (req, res) => {
        try {
            res.status(200).send('todas as plantas')
        } catch (err) {
            if(err) {
                res.status(400).send(err)
            }
        }
    };

    static listarPlantasPorId = (req, res) => {
        try {
            const id = req.params.id;
            res.status(200).send(`plantas:${id}`)
        } catch (err) {
            if(err) {
                res.status(400).send(err)
            }
        }
    };

    static cadastrarPlantas = (req, res) => {
        try{
            res.status(201).send("planta cadastrada!")
        } catch(err) {
            if(err) {
                res.status(400).send(err)
            }
        }
    }

    static atualizarPlantas = (req, res) => {
        try {
            const id = req.params.id;
            
            res.status(200).send("Planta atualiada!")
        } catch(err) {
            if (err) {
                res.status(400).send(err)
            }
        }
    }

    static excluirPlantas = (req, res) => {
        try{ 
            const id = req.params.id;

            res.status(200).send("Planta excluida com sucesso!")
        } catch(err) {
            if(err) {
                res.status(400).send(err)
            }
        }
    }
}

export default PlantaController;