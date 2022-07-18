export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        this.elemento = document.querySelector(seletor);
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
