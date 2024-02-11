import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pais } from '../../modelos/pais';
import { Location } from '@angular/common';
import { PaisService } from '../../servicios/pais.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit {
  idPais: number;
  public pais: Pais;

  constructor(private location: Location, private route: ActivatedRoute, private paisService: PaisService){
  }

  ngOnInit(): void { 
    
    this.route.params.subscribe(params =>{
      this.idPais = params["id"];

      console.log("Editar --> this.idPais: " + this.idPais);

      this.paisService.getPaisPorId(this.idPais).subscribe(result => {
        this.pais = result;
        console.log("jjjjjjjj: " + JSON.stringify(this.pais));
      });
    });

    //También se puede obtener de la siguiente forma (La diferencia es que todos los parámetros los retorna con formato string)
    //this.idPais = this.route.snapshot.paramMap.get('id');
  }

  regresar() {
    //Mediante este comando se navega hacia atras (Página anterior)
    this.location.back()
  }

  editar(){
    this.pais.nombre = "NUEVO NOMBRE";

    this.paisService.updatePais(this.pais).subscribe(result => {
      console.log(`El elemento actualizado es: ${JSON.stringify(this.pais)}`);
    });

    this.location.back();
  }

}
