import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Poliza } from './poliza';

@Injectable()

export class PolizaService
{
    private apiServer = "https://localhost:7260/poliza/";
    private listaPoliza = "listPolizas";
    private getPoliza = "getPoliza";
    private modificarPoliza = "modificarPoliza";
    private savePoliza = "savePoliza";
    private eliminarPoliza = "deletePoliza";


    constructor(public http:HttpClient){}

    public listPolizas():Observable<any>
    {
        return this.http.get(this.apiServer+this.listaPoliza)
    }

    public mostrarPoliza(id:number):Observable<any>
    {
        return this.http.get(this.apiServer+this.getPoliza+"?id="+id)
    }

    public editarPoliza(id:number, poliza:Poliza):Observable<any>
    {
        return this.http.put(this.apiServer+this.modificarPoliza+"?id="+id, poliza)
    }

    public guardarPoliza(poliza:Poliza):Observable<any>
    {
        return this.http.post(this.apiServer+this.savePoliza, poliza)
    }

    public deletePoliza(id:number):Observable<any>
    {
        return this.http.delete(this.apiServer+this.eliminarPoliza+"?id="+id)
    }
}