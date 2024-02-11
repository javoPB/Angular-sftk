import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../servicios/pais.service';
import { Pais } from '../../modelos/pais';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent implements OnInit {

  constructor(private paisService: PaisService){}

  ngOnInit(): void {
  }

  agregarPais(){
    //el id lo genera el JSON Server, por tal motivo no requerimos indicarlo nosotros.
    let nuevoPais: Pais = {nombre: "Nuevo-País", bandera: "Por definir", capital: "Capital de nuevo País", poblacion: 12345687}; 


    console.log('Evento con el que se agrega un nuevo país!!!');
    this.paisService.createPais(nuevoPais).subscribe(result => {
      console.log(`El nuevo país creado es: ${JSON.stringify(result)}`);
    });
  }
}
