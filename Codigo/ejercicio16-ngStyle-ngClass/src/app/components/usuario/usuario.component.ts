import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent implements OnInit {

  constructor( private route: ActivatedRoute ){
    /**
     * NOTE que los parámetros se obtienen directamente de <<< this.router.params >>>
    /**/
    this.route.params.subscribe( params => {
      console.log(`Información de Usuario (Padre): ${JSON.stringify(params)}`);
    }); 
  }

  ngOnInit(): void {

  }

}
