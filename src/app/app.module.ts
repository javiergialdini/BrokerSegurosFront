import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PolizaComponent } from './poliza/poliza.component';
import { PolizaService } from './poliza/poliza.service';
import { HttpClientModule } from '@angular/common/http';
import { CoberturaComponent } from './cobertura/cobertura.component';
import { CoberturaService } from './cobertura/cobertura.service';
import { CoberturaPolizaComponent } from './cobertura-poliza/cobertura-poliza.component';
import { CoberturasPolizaService } from './cobertura-poliza/coberturaPoliza.service';
import { AbmPolizaComponent } from './abm-poliza/abm-poliza.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes:Routes=[
  {path:'', component:PolizaComponent},
  {path:'abmPoliza/:id', component:AbmPolizaComponent},
  {path:'abmPoliza', component:AbmPolizaComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    PolizaComponent,
    CoberturaComponent,
    CoberturaPolizaComponent,
    AbmPolizaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [
    PolizaService,
    CoberturaService,
    CoberturasPolizaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
