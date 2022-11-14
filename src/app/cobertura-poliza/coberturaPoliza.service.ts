import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable()

export class CoberturasPolizaService
{
    private apiServer = "https://localhost:7260/poliza/";
    private listaCoberturasPoliza = "listCoberturasPoliza";

    constructor(public http:HttpClient){}

    
    public listCoberturasPoliza(id:string):Observable<any>
    {
        let url = this.apiServer+this.listaCoberturasPoliza+"?id="+id
        return this.http.get(url)
    }
}