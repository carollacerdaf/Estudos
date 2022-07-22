export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        const elemento = document.querySelector(seletor);
        if (elemento)
            this.elemento = elemento;
        else
            throw Error(`Seletor ${seletor} nao existe no DOM.`);
        if (escapar)
            this.escapar = escapar;
    }
    update(negociacoes) {
        let template = this.template(negociacoes);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = this.template(negociacoes);
    }
}
