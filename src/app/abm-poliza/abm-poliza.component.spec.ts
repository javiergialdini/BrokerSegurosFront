import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmPolizaComponent } from './abm-poliza.component';

describe('AbmPolizaComponent', () => {
  let component: AbmPolizaComponent;
  let fixture: ComponentFixture<AbmPolizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbmPolizaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmPolizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
