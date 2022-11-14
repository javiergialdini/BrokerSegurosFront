import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoberturaPolizaComponent } from './cobertura-poliza.component';

describe('CoberturaPolizaComponent', () => {
  let component: CoberturaPolizaComponent;
  let fixture: ComponentFixture<CoberturaPolizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoberturaPolizaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoberturaPolizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
