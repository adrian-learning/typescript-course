export function escapar(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        let retorno = metodoOriginal.apply(this, args);
        if (typeof retorno === 'string') {
            console.log(`Escape em ação na classe: ${this.constructor.name} para o método ${propertyKey}`);
            return retorno.replace(/<script>[\s\S]*?<\/script/, '');
        }
        return retorno;
    };
    return descriptor;
}
//# sourceMappingURL=escapar.js.map