import { Component, OnInit, Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PolizaService } from '../poliza/poliza.service';
import { PolizaComponent } from '../poliza/poliza.component';
import { Poliza } from '../poliza/poliza';
import { Coberturas } from '../cobertura/cobertura';
import { coberturasPoliza } from '../cobertura-poliza/coberturasPoliza'
import { CoberturasPolizaService } from '../cobertura-poliza/coberturaPoliza.service';
import { CoberturaService } from '../cobertura/cobertura.service';

@Component({
  selector: 'app-abm-poliza',
  templateUrl: './abm-poliza.component.html',
  styleUrls: ['./abm-poliza.component.css']
})
export class AbmPolizaComponent implements OnInit {

  constructor(private routerVar:Router, private route:ActivatedRoute, private poliza:PolizaService, private cobertura:CoberturaService, private cobPoliza:CoberturasPolizaService) { }

  modo:any;
  indice:any;
  id:number=0;
  polizaP:Poliza=new Poliza();

  coberturas:Coberturas[]=[];
  polizas:Poliza[]=[];
  cuadroNomPoliza:string='';
  cuadroMontoAsegurado:number=0;

  ngOnInit(): void {
    this.modo=this.route.snapshot.queryParams['modo'];
    this.indice=this.route.snapshot.params['id'];
    
    if(this.indice)
    {
    this.poliza.mostrarPoliza(this.indice).subscribe
    (
      (r) => { this.polizaP=r; console.log(r); 
        this.cuadroNomPoliza=this.polizaP.nomPoliza;
        this.cuadroMontoAsegurado=this.polizaP.montoAsegurado;
        this.id=this.polizaP.idPoliza;
      },
      (e) => { console.error(e)}
    )
    }

    this.cobertura.listCoberturas().subscribe
    (
      (r) => { this.coberturas=r; console.log(r);},
      (e) => { console.error(e)}
    )
  }

  guardarCoberturaPoliza(idPoliza:number, idCobertura:number){
    alert("idPoliza " + idPoliza.toString() + " idCobertura " + idCobertura.toString())
  }

  onChange(idCobPoliza:string, idPoliza:number) {
    let coberturaPoliza:any;
    this.cobPoliza.guardarCoberturaPoliza(Number(idCobPoliza), idPoliza).subscribe
    (
      (r) => { coberturaPoliza=r; console.log(r); document.location.reload();},
      (e) => { console.error(e)}
    )
  }


  guardarEmpleado() {
    if(this.indice)
    {
      this.polizaP.idPoliza=this.id;
      this.polizaP.nomPoliza=this.cuadroNomPoliza;
      this.polizaP.montoAsegurado=this.cuadroMontoAsegurado;
      this.poliza.editarPoliza(this.indice, this.polizaP).subscribe
    (
      (r) => { this.polizaP=r; console.log(r); document.location.reload();},
      (e) => { console.error(e)}
    )
    }
    else
    {
      this.polizaP.nomPoliza=this.cuadroNomPoliza;
      this.polizaP.montoAsegurado=this.cuadroMontoAsegurado;
      this.poliza.guardarPoliza(this.polizaP).subscribe
    (
      (r) => { this.polizaP=r; console.log(r); document.location.reload();},
      (e) => { console.error(e)}
    )
    }
  }
}
