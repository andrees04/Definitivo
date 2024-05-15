import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPagosComponent } from './pagina-pagos.component';

describe('PaginaPagosComponent', () => {
  let component: PaginaPagosComponent;
  let fixture: ComponentFixture<PaginaPagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaPagosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
