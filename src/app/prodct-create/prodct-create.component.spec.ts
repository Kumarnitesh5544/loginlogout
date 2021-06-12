import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdctCreateComponent } from './prodct-create.component';

describe('ProdctCreateComponent', () => {
  let component: ProdctCreateComponent;
  let fixture: ComponentFixture<ProdctCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdctCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdctCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
