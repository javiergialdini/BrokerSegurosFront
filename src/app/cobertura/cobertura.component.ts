import { Component, OnInit } from '@angular/core';
import { CoberturaService } from './cobertura.service';

@Component({
  selector: 'app-cobertura',
  templateUrl: './cobertura.component.html',
  styleUrls: ['./cobertura.component.css']
})
export class CoberturaComponent implements OnInit {

  coberturas:any;

  constructor(public cobertura:CoberturaService) {}

  ngOnInit()
  {
    this.cobertura.listCoberturas().subscribe
    (
      (r) => { this.coberturas=r; console.log(r)},
      (e) => { console.error(e)}
    )

  }

}
