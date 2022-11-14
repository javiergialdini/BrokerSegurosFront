import { Component,OnInit } from '@angular/core';
import { PolizaService } from './poliza/poliza.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Broker de seguros';
  polizas:any

  constructor(public poliza:PolizaService){}

  ngOnInit()
  {
    this.poliza.listPolizas().subscribe
    (
      (r) => { this.polizas=r; console.log(r)},
      (e) => { console.error(e)}
    )

  }
}
