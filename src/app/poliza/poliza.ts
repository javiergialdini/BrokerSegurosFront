import { coberturasPoliza } from "../cobertura-poliza/coberturasPoliza";

export class Poliza
{
    public idPoliza:number = 0;
    public nomPoliza:string = '';
    public montoAsegurado:number = 0;
    public coberturasPolizas:coberturasPoliza[] = [];

    constructor(idPoliza:number, nomPoliza:string, montoAsegurado:number, coberturasPolizas:coberturasPoliza[]){
        this.idPoliza = idPoliza;
        this.nomPoliza = nomPoliza;
        this.montoAsegurado = montoAsegurado;
        this.coberturasPolizas = coberturasPolizas;
    }
}