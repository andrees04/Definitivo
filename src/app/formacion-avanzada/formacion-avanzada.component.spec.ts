import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormacionAvanzadaComponent } from './formacion-avanzada.component';

describe('FormacionAvanzadaComponent', () => {
  let component: FormacionAvanzadaComponent;
  let fixture: ComponentFixture<FormacionAvanzadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormacionAvanzadaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormacionAvanzadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
