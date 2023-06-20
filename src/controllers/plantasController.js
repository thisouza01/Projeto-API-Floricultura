import NaoEncontrado from "../erros/NaoEncontrado.js"
import plantas from "../model/Planta.js";

class PlantaController {

    static listarPlantas = async (req, res, next) => {
        try {
            const plantasResultado = await plantas.find();
            res.status(200).json(plantasResultado);
        } catch (err) {
            if(err) {
                next(err);
            }
        }
    };

    static listarPlantasPorId = async (req, res, next) => {
        try {
            const id = req.params.id;
            const resultado = await plantas.findById(id);

            if(resultado !== null) {
                res.status(200).send(resultado);
            } else {
                next(new NaoEncontrado("Id da planta nao localizado!"));
            }

        } catch (err) {
            next(err);
        }
    };

    static cadastrarPlantas = async (req, res, next) => {
        try{
            let planta = new plantas(req.body);
            const resultado = await planta.save();

            res.status(201).send(resultado.toJSON());
        } catch(err) {
            next(err);
        }
    }

    static atualizarPlantas = async (req, res, next) => {
        try {
            const id = req.params.id;
            const plantaAtualizada = await plantas.findByIdAndUpdate(id, {$set: req.body});

            if(plantaAtualizada !== null) {
                res.status(200).json(plantaAtualizada);
            } else {
                next(new NaoEncontrado("Id da planta não encontrado!"));
            }
            
        } catch(err) {
            next(err);
        }
    }

    static excluirPlantas = async (req, res) => {
        try{ 
            const id = req.params.id;
            const plantaExluida = await plantas.findByIdAndDelete(id);
            
            if(plantaExluida !== null) {
                res.status(200).send({message: "Planta excluida com sucesso!"});
            } else {
                next(new NaoEncontrado("Id nao encontrado!"));
            }

        } catch(err) {
            next(err);
        }
    }
}

export default PlantaController;