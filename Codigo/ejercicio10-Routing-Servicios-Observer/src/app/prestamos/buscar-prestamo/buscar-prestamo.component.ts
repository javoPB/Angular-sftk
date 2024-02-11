import { Component, OnInit } from '@angular/core';
import { PRESTAMOS, Prestamo } from '../../modelos/prestamo';

@Component({
  selector: 'app-buscar-prestamo',
  templateUrl: './buscar-prestamo.component.html',
  styleUrl: './buscar-prestamo.component.css'
})
export class BuscarPrestamoComponent implements OnInit {
  prestamos: Prestamo[] = PRESTAMOS;

  ngOnInit(): void {
      console.log(`Detalle de los prestamos: ${this.prestamos}`);
  }
  
}
