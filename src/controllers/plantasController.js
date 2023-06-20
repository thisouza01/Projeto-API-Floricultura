import plantas from "../model/Planta.js";

class PlantaController {

    static listarPlantas = async (req, res) => {
        try {
            const plantasResultado = await plantas.find()
            res.status(200).send(plantasResultado)
        } catch (err) {
            if(err) {
                res.status(400).send(err)
            }
        }
    };

    static listarPlantasPorId = async (req, res) => {
        try {
            const id = req.params.id;
            const resultado = await plantas.findById(id);

            if(resultado !== null) {
                res.status(200).send(resultado)
            }

        } catch (err) {
            if(err) {
                res.status(400).send(err)
            }
        }
    };

    static cadastrarPlantas = async (req, res) => {
        try{
            let planta = new plantas(req.body);
            const resultado = await planta.save()

            res.status(201).send(resultado)
        } catch(err) {
            if(err) {
                res.status(400).send(err)
            }
        }
    }

    static atualizarPlantas = async (req, res) => {
        try {
            const id = req.params.id;
            const plantaAtualizada = await plantas.findByIdAndUpdate(id, {$set: req.body});

            if(plantaAtualizada !== null) {
                res.status(200).json(plantaAtualizada)
            }
            
        } catch(err) {
            if (err) {
                res.status(400).send(err)
            }
        }
    }

    static excluirPlantas = async (req, res) => {
        try{ 
            const id = req.params.id;
            const plantaExluida = await plantas.findByIdAndDelete(id);
            
            if(plantaExluida !== null) {
                res.status(200).send({message: "Planta excluida com sucesso!"});
            }

        } catch(err) {
            if(err) {
                res.status(400).send(err)
            }
        }
    }
}

export default PlantaController;