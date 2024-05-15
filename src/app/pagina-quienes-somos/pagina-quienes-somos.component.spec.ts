import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaQuienesSomosComponent } from './pagina-quienes-somos.component';

describe('PaginaQuienesSomosComponent', () => {
  let component: PaginaQuienesSomosComponent;
  let fixture: ComponentFixture<PaginaQuienesSomosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaQuienesSomosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaQuienesSomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
