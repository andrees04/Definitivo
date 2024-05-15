import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormacionBasicaComponent } from './formacion-basica.component';

describe('FormacionBasicaComponent', () => {
  let component: FormacionBasicaComponent;
  let fixture: ComponentFixture<FormacionBasicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormacionBasicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormacionBasicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
