import { Component, OnInit } from '@angular/core';
import { Datos } from './modelos/datos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Pipes - Ejemplos:';
  precio: number = 1589.5321;
  medida: number = 15.36;
  texto: string = "Se proporciona el contexto para ejemplificar el uso de los pipes";
  porcentaje: number = 45.15;
  datos: Datos = {nombre: 'Juan Pérez', edad: 13, descripcion: 'Los datos presentados son proporcionados por el interesado', imc: 1.15};

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
