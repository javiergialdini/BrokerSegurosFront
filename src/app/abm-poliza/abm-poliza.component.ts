import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-abm-poliza',
  templateUrl: './abm-poliza.component.html',
  styleUrls: ['./abm-poliza.component.css']
})
export class AbmPolizaComponent implements OnInit {

  constructor(private routerVar:Router, private route:ActivatedRoute) { }

  modo:any;
  indice:any;

  ngOnInit(): void {
    this.modo=this.route.snapshot.queryParams['modo'];
    this.indice=this.route.snapshot.params['id'];
  }

}
