class VasoController {
    
    static listarVasos = (req, res) => {
        try{
            res.status(200).send("todos os vasos!")
        } catch(err) {
            if(err) {
                res.status(400).send(err)
            }
        }
    }

    static listarVasosPorId = (req, res) => {
        try{ 
            const id = req.params.id

            res.status(200).send(`Vasos:  ${id}`)
        } catch (err) {
            if(err) {
                res.status(400).send(err)
            }
        }
    }

    static cadastrarVasos = (req, res) => {
        try {
            res.status(200).send("vaso cadastrado!")
        } catch(err) {
            if(err) {
                res.status(400).send(err)
            }
        }
    }

    static atualizarVasos = (req, res) => {
        try {
            const id = req.params.id

            res.status(200).send("vaso atualizado!")
        } catch (err) {
            if(err) {
                res.status(400).send(err)
            }
        }
    }

    static excluirVasos = (req, res) => {
        try {
            const id = req.params.id

            res.status(200).send("vaso excluido com sucesso!")
        } catch(err) {
            if(err) {
                res.status(400).send(err)
            }
        }
    }
}

export default VasoController;