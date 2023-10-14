export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociao) {
        this.negociacoes.push(negociao);
    }
    lista() {
        return this.negociacoes;
    }
}
