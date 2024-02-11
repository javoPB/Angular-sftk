import { Component, OnInit } from '@angular/core';
import { PaisServiceService } from '../../services/pais-service.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Pais } from '../../modelos/pais';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit {
  idPais: number;
  pais: Pais;

  constructor(private location: Location, private route: ActivatedRoute, private paisService: PaisServiceService){}

  ngOnInit(): void {
    console.log("Iniciando componente Editar!!");

    this.route.params.subscribe(params => {
      this.idPais = params["id"];
      console.log(`El país a editar tiene id: ${this.idPais}`);

      this.paisService.getPaisPorId(this.idPais).subscribe(result => {
        this.pais = result;
        console.log(`La información del País es: ${JSON.stringify(this.pais)}`);
        console.log(this.pais.bandera);
      });
    });
  }

  editar(){
    this.pais.nombre = 'NOMBRE MODIFICADO';

    this.paisService.updatePais(this.pais).subscribe(result => {
      console.log(`Información actualizada: ${result}`);
    });

    this.location.back();
  }

  regresar(){
    this.location.back();
  }

}
