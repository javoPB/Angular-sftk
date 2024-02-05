import { Component, OnInit } from '@angular/core';
import { Libro } from '../modelo/libro';
import { Prestamo } from '../modelo/prestamo';
import { Usuario } from '../modelo/usuario';

@Component({
  selector: 'app-componente-padre',
  templateUrl: './componente-padre.component.html',
  styleUrl: './componente-padre.component.css'
})
export class ComponentePadreComponent implements OnInit {
  libro: Libro = new Libro("isbn", "El conejo y la tortuga", "Juan Pérez", "Trillas", "1998-12-18", 5000);
  prestamo: Prestamo = new Prestamo("2024-01-15", "2024-01-31", "NPS");
  usuario: Usuario = new Usuario("Néstor Pérez", "NPS", "5510660163");


  ngOnInit(): void {
    
  }

  

}
