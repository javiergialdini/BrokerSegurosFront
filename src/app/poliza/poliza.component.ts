import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PolizaService } from './poliza.service';
import { CoberturasPolizaService } from '../cobertura-poliza/coberturaPoliza.service';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-poliza',
  templateUrl: './poliza.component.html',
  styleUrls: ['./poliza.component.css']
})
export class PolizaComponent implements OnInit {

  polizas:any;
  coberturasPoliza:any;

  constructor(public poliza:PolizaService, private routerVar:Router, private route:ActivatedRoute){}

  @Input()
  pol!: PolizaService;
  @Input()
  id!: number;

  ngOnInit()
  {
    this.poliza.listPolizas().subscribe
    (
      (r) => { this.polizas=r; console.log(r)},
      (e) => { console.error(e)}
    )
  }

  

}
