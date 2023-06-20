import NaoEncontrado from "../erros/NaoEncontrado.js"
import vasos from "../model/Vaso.js"

class VasoController {
    
    static listarVasos = async (req, res, next) => {
        try{
            const vasosResultado = await vasos.find();

            res.status(200).json(vasosResultado);
        } catch(err) {
            if(err) {
                next(err);
            }
        }
    }

    static listarVasosPorId = async (req, res, next) => {
        try{ 
            const id = req.params.id;
            const resultado = await vasos.findById(id);

            if(resultado !== null) {
                res.status(200).json(resultado);
            } else {
                next(new NaoEncontrado("Id não encontrado!"));
            }

        } catch (err) {
            next(err);
        }
    }

    static cadastrarVasos = async (req, res, next) => {
        try {
            let vaso = new vasos(req.body);
            const vasoCadastrado = await vaso.save();

            res.status(200).json(vasoCadastrado);
        } catch(err) {
            next(err);
        }
    }

    static atualizarVasos = async (req, res, next) => {
        try {
            const id = req.params.id;
            const vasoAtualizado = await vasos.findByIdAndUpdate(id, {$set: req.body});

            if(vasoAtualizado !== null) {
                res.status(200).json(vasoAtualizado);
            } else {
                next(new NaoEncontrado("Id não encontrado!"));
            }
        } catch (err) {
            next(err);
        }
    }

    static excluirVasos = async (req, res, next) => {
        try {
            const id = req.params.id;
            const vasoExcluido = await vasos.findByIdAndDelete(id);

            if(vasoExcluido !== null) {
                res.status(200).send("vaso excluido com sucesso!");
            } else {
                next(new NaoEncontrado("Id não encontrado!"));
            }

        } catch(err) {
            next(err);
        }
    }
}

export default VasoController;