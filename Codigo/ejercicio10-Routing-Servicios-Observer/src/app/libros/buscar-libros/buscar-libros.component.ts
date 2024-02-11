import { Component, OnInit } from '@angular/core';
import { LIBROS, Libro } from '../../modelos/libro';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buscar-libros',
  templateUrl: './buscar-libros.component.html',
  styleUrl: './buscar-libros.component.css'
})
export class BuscarLibrosComponent implements OnInit {
  libros: Libro[] = LIBROS;

  constructor(private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    console.log(`Detalle de los libros: ${this.libros}`);
  }

  crear() {
    console.log('Iniciando solicitud de generar un nuevo Libro!!!');
    this.router.navigate(['../../libros/agregar'], {relativeTo: this.route});
  }
}
