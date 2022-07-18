export abstract class View<T>{
    
    protected elemento: HTMLElement;
    private escapar = false;

    constructor(seletor: string, escapar?: boolean) {
        this.elemento = document.querySelector(seletor);
        if(escapar)
            this.escapar = escapar;
    }

    protected abstract template(model: T): string;

    public update(negociacoes: T): void {
        let template = this.template(negociacoes);
        if(this.escapar){
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = this.template(negociacoes);
    }
}