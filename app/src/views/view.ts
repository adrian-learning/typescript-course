
export abstract class View<T> {
    protected elemento: HTMLElement

    constructor(selector: string){
        this.elemento = document.querySelector(selector) as HTMLElement
    }

    protected abstract template(model: T): string

    protected abstract update(model: T): void

}