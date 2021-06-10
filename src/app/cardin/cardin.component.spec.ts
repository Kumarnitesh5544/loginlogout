import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardinComponent } from './cardin.component';

describe('CardinComponent', () => {
  let component: CardinComponent;
  let fixture: ComponentFixture<CardinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
