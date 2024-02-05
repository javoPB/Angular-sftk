import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanquetesComponent } from './banquetes.component';

describe('BanquetesComponent', () => {
  let component: BanquetesComponent;
  let fixture: ComponentFixture<BanquetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BanquetesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BanquetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
