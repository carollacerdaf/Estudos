export function logarTempoDeExecucao() {
    return function(
        target:any,
        propertyKey:string,
        descriptor: PropertyDescriptor
    ){
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: any[]) {
            const t1 = performance.now();
            //chama método original
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execucao ${(t2-t1/1000)}`)
            retorno;
        };
        return descriptor;
    }
}