import { Component, OnInit } from '@angular/core';
import { PaisServiceService } from '../../services/pais-service.service';
import { Pais } from '../../modelos/pais';
import { Location } from '@angular/common';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent implements OnInit {

  constructor(private location: Location, private paisService: PaisServiceService){}

  ngOnInit(): void {
    
  }

  agregar(){
    //El id no se necesita pasar ya que JSON Server lo genera en automático al generar un nuevo elemento (Recordemos que en la interface Pais el atributo id esta como opcional)
    let newPais: Pais = {
      nombre: "NUEVO PAÍS",
      bandera: "SIN BANDERA",
      capital: "SIN CAPITAL",
      poblacion: 1234587963
    }

    this.paisService.createPais(newPais).subscribe(result => {
      console.log(`Información del País generado: ${JSON.stringify(result)}`);
    });

    this.location.back();
  }

}
