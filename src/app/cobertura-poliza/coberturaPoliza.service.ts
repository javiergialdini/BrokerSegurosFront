import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { coberturasPoliza } from './coberturasPoliza'

import { HttpClient } from '@angular/common/http';

@Injectable()

export class CoberturasPolizaService
{
    private apiServer = "https://localhost:7260/poliza/";
    private listaCoberturasPoliza = "listCoberturasPoliza";
    private saveCoberturaPoliza = 'saveCoberturaPoliza';

    constructor(public http:HttpClient){}

    
    public listCoberturasPoliza(id:string):Observable<any>
    {
        let url = this.apiServer+this.listaCoberturasPoliza+"?id="+id
        return this.http.get(url)
    }

    public guardarCoberturaPoliza(idCobertura:number, idPoliza:number){
        let cobPoliza = new coberturasPoliza()
        cobPoliza.idCobertura = idCobertura;
        cobPoliza.idPoliza = idPoliza;
        return this.http.post(this.apiServer+this.saveCoberturaPoliza, cobPoliza)
    }
}