import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable()

export class CoberturaService
{
    private apiServer = "https://localhost:7260/cobertura/";
    private listaCoberturas = "listCoberturas";

    constructor(public http:HttpClient){}

    public listCoberturas():Observable<any>
    {
        return this.http.get(this.apiServer+this.listaCoberturas)
    }

    private apiServerP = "https://localhost:7260/poliza/";
    private listaCoberturasPoliza = "listCoberturasPoliza";

    
    public listCoberturasPoliza(id:string):Observable<any>
    {
        let url = this.apiServerP+this.listaCoberturasPoliza+"?id="+id
        return this.http.get(url)
    }
}