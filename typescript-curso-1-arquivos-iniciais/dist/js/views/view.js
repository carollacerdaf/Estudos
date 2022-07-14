export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    update(negociacoes) {
        const template = this.template(negociacoes);
        this.elemento.innerHTML = this.template(negociacoes);
    }
}
