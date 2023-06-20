import RequisicaoIncorreta from "./RequisicaoIncorreta.js";


class ErroValidacao extends RequisicaoIncorreta {
    constructor(err) {
        const mensagemErro = Object.values(err.errors)
            .map(err => err.message)
            .join("; ")

        super(`Os seguintes erros foram encontrados: ${mensagemErro}`);
    }
}

export default ErroValidacao;