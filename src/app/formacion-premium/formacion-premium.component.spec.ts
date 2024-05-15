import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormacionPremiumComponent } from './formacion-premium.component';

describe('FormacionPremiumComponent', () => {
  let component: FormacionPremiumComponent;
  let fixture: ComponentFixture<FormacionPremiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormacionPremiumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormacionPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
