import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Negociacao[] = [];

    public adiciona(negociao: Negociacao) {
        this.negociacoes.push(negociao);
    }

    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
}



