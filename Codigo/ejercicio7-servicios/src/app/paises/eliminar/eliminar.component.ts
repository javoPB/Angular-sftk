import { Component } from '@angular/core';
import { Pais } from '../../modelos/pais';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PaisService } from '../../servicios/pais.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css'
})
export class EliminarComponent {
  idPais: number;
  pais: Pais;

  constructor(private location: Location, private route: ActivatedRoute, private paisService: PaisService){

  }

  ngOnInit(): void { 
    
    this.route.params.subscribe(params =>{
      this.idPais = params["id"];

      this.paisService.getPaisPorId(this.idPais).subscribe(result => {
        this.pais = result;  
      });

      console.log("info Pais: " + JSON.stringify(this.pais));
    });

    //También se puede obtener de la siguiente forma (La diferencia es que todos los parámetros los retorna con formato string)
    //this.idPais = this.route.snapshot.paramMap.get('id');

  }

  regresar() {
    //Mediante este comando se navega hacia atras (Página anterior)
    this.location.back();
  }

  eliminar(){
    this.paisService.deletePais(this.idPais).subscribe(result => {
      console.log(`El elemento eliminado es: ${JSON.stringify(result)}`);
    });

    this.location.back();
  }
}
