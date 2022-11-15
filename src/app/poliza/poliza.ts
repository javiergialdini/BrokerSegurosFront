import { coberturasPoliza } from "../cobertura-poliza/coberturasPoliza";

export class Poliza
{
    public idPoliza:number = 0;
    public nomPoliza:string = '';
    public montoAsegurado:number = 0;
    public coberturasPolizas:coberturasPoliza[] = [];

}