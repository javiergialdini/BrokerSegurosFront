import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable()

export class PolizaService
{
    private apiServer = "https://localhost:7260/poliza/";
    private listaPoliza = "listPolizas";

    constructor(public http:HttpClient){}

    public listPolizas():Observable<any>
    {
        return this.http.get(this.apiServer+this.listaPoliza)
    }
}