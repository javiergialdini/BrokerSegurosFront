import { Component, OnInit, Input } from '@angular/core';
import { CoberturasPolizaService } from './coberturaPoliza.service';
import { CoberturaService } from '../cobertura/cobertura.service'
import { AbmPolizaComponent } from '../abm-poliza/abm-poliza.component';

@Component({
  selector: 'app-cobertura-poliza',
  templateUrl: './cobertura-poliza.component.html',
  styleUrls: ['./cobertura-poliza.component.css']
})
export class CoberturaPolizaComponent implements OnInit {

  coberturasPoliza:any;
  id:any=0;

  constructor(public coberturaPoliza:CoberturaService) { }
  
  ngOnInit(): void {
    this.coberturaPoliza.listCoberturasPoliza(this.idPoliza).subscribe
    (
      (r) => { this.coberturasPoliza=r; console.log(r)},
      (e) => { console.error(e)}
    )
  }

  @Input() idPoliza:any;
}
