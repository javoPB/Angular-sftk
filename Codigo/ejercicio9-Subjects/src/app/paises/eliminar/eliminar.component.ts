import { Component, OnInit } from '@angular/core';
import { PaisServiceService } from '../../services/pais-service.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Pais } from '../../modelos/pais';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css'
})
export class EliminarComponent implements OnInit {
  pais: Pais;

  constructor(private location: Location, private route: ActivatedRoute, private paisServicio: PaisServiceService){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let idPais = params["id"];

      this.paisServicio.getPaisPorId(idPais).subscribe(result => {
        this.pais = result; 
      });
    });
  }

  eliminar(){
    if( this.pais.id ){
      this.paisServicio.deletePais(this.pais.id).subscribe(result => {
        console.log(`El País eliminado es: ${result}`);
      });
    }

    this.location.back();
  }

  regresar(){
    this.location.back();
  }
}
