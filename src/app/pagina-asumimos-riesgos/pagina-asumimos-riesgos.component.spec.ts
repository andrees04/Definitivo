import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAsumimosRiesgosComponent } from './pagina-asumimos-riesgos.component';

describe('PaginaAsumimosRiesgosComponent', () => {
  let component: PaginaAsumimosRiesgosComponent;
  let fixture: ComponentFixture<PaginaAsumimosRiesgosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaAsumimosRiesgosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaAsumimosRiesgosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
