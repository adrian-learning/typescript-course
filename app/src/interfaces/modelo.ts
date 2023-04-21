import { IComparavel } from "./comparavel";
import { Imprimivel } from "./imprimivel";

export interface IObjetoModelo<T> extends IComparavel<T>, Imprimivel{

} 