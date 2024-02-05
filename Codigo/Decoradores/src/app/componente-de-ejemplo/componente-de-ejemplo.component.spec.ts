import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteDeEjemploComponent } from './componente-de-ejemplo.component';

describe('ComponenteDeEjemploComponent', () => {
  let component: ComponenteDeEjemploComponent;
  let fixture: ComponentFixture<ComponenteDeEjemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponenteDeEjemploComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponenteDeEjemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
