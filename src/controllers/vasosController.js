import vasos from "../model/Vaso.js"

class VasoController {
    
    static listarVasos = async (req, res) => {
        try{
            const vasosResultado = await vasos.find();

            res.status(200).json(vasosResultado);
        } catch(err) {
            if(err) {
                res.status(400).send(err)
            }
        }
    }

    static listarVasosPorId = async (req, res) => {
        try{ 
            const id = req.params.id;
            const resultado = await vasos.findById(id);

            if(resultado !== null) {
                res.status(200).json(resultado)
            }

        } catch (err) {
            if(err) {
                res.status(400).send(err)
            }
        }
    }

    static cadastrarVasos = async (req, res) => {
        try {
            let vaso = new vasos(req.body);
            const vasoCadastrado = await vaso.save();

            res.status(200).json(vasoCadastrado);
        } catch(err) {
            if(err) {
                res.status(400).send(err)
            }
        }
    }

    static atualizarVasos = async (req, res) => {
        try {
            const id = req.params.id
            const vasoAtualizado = await vasos.findByIdAndUpdate(id, {$set: req.body});

            if(vasoAtualizado !== null) {
                res.status(200).json(vasoAtualizado);
            }
        } catch (err) {
            if(err) {
                res.status(400).send(err)
            }
        }
    }

    static excluirVasos = async (req, res) => {
        try {
            const id = req.params.id
            const vasoExcluido = await vasos.findByIdAndDelete(id)

            if(vasoExcluido !== null) {
                res.status(200).send("vaso excluido com sucesso!")
            }

        } catch(err) {
            if(err) {
                res.status(400).send(err)
            }
        }
    }
}

export default VasoController;