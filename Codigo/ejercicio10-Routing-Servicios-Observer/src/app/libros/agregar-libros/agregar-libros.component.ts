import { Component, OnInit } from '@angular/core';
import { LIBROS, Libro } from '../../modelos/libro';
import { Location } from '@angular/common';

@Component({
  selector: 'app-agregar-libros',
  templateUrl: './agregar-libros.component.html',
  styleUrl: './agregar-libros.component.css'
})
export class AgregarLibrosComponent implements OnInit {
  nuevoLibro: Libro = new Libro('isbn-nuevo', 'Titulo-nuevo', 'Autor-nuevo', 'Editorial-nuevo', '2024-01-01', 100);

  constructor(private location: Location){}

  ngOnInit(): void {
    console.log('En el componente para generar un nuevo Libro!!!');
  }

  crear(){
    LIBROS.push(this.nuevoLibro);

    this.location.back();
  }

}
