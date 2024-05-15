import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartasFooterComponent } from './cartas-footer.component';

describe('CartasFooterComponent', () => {
  let component: CartasFooterComponent;
  let fixture: ComponentFixture<CartasFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartasFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartasFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
