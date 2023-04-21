export function domInjector(seletor: string) {

    return function(target: any, propertyKey: string){
        console.log(`Modificando prototype ${target.constructor.name} para adicionar o getter a propriedade ${propertyKey}`)

        let element: HTMLElement
        const getter = function(){
            if(!element){
                element = document.querySelector(seletor) as HTMLInputElement
                console.log(`Buscando elemento ${seletor} para injetar ${propertyKey}`)
            }
            
            return element
        }

        Object.defineProperty(target, propertyKey, { get: getter })
    }
}