import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreBasketComponent } from './store-basket.component';

describe('StoreBasketComponent', () => {
  let component: StoreBasketComponent;
  let fixture: ComponentFixture<StoreBasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreBasketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
