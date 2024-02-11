import { Component, OnInit } from '@angular/core';
import { PaisServiceService } from '../../services/pais-service.service';
import { Pais } from '../../modelos/pais';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent implements OnInit {
  paises: Pais[];

  constructor(private router: Router, private route: ActivatedRoute, private paisService: PaisServiceService){}

  ngOnInit(): void {
    this.paisService.getPaises().subscribe(result => {
      this.paises = result;
    });
  }

  editar(id: number | undefined){
    this.router.navigate(['../editar', id], {relativeTo: this.route});
    console.log("El pais a Editar es:");
  }

  eliminar(id: number | undefined){
    this.router.navigate(['../eliminar', id], {relativeTo: this.route});
    console.log("El pais a ");
  }

  buscarPorNombre(nombre: string){
    this.paisService.getPaisPorNombre(nombre).subscribe(result =>{
      alert(JSON.stringify(result));
    });    
  }

}
