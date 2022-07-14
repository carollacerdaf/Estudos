export abstract class View<T>{
    
    protected elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    protected abstract template(model: T): string;

    public update(negociacoes: T): void {
        const template = this.template(negociacoes);
        this.elemento.innerHTML = this.template(negociacoes);
    }
}