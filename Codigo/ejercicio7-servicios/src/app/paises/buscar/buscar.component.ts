import { Component, OnInit } from '@angular/core';
//import { PAISES, Paises } from '../../modelos/paises';
import { Pais } from '../../modelos/pais';
import { ActivatedRoute, Router } from '@angular/router';
import { PaisService } from '../../servicios/pais.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent implements OnInit {

  paises: Pais[];

  constructor(private router: Router, private route: ActivatedRoute, private paisService: PaisService){}

  ngOnInit(): void {
    console.log(`>>>> PAISES: ${JSON.stringify(this.paises)}`);

    this.paisService.getPais().subscribe(result => {
      this.paises = result;
    });
  }


  editar(id: number | undefined){
    this.router.navigate(['../editar', id], {relativeTo: this.route})
    console.log(`El país a editar es: ${id}`);
  }

  eliminar(id: number | undefined){
    this.router.navigate(['../eliminar', id], {relativeTo: this.route})
    console.log(`El país a eliminar es: ${id}`);
  }

  buscarPorNombre(nombre: string){
    this.paisService.getPaisPorNombre(nombre).subscribe(result => {
      alert(JSON.stringify(result));
    });
  }

  getPaises(): Pais[] {
    return this.paises;
  }

}
