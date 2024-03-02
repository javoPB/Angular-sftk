import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  templateUrl: './usuario-nuevo.component.html',
  styleUrl: './usuario-nuevo.component.css'
})
export class UsuarioNuevoComponent implements OnInit{
  
  constructor( private route: ActivatedRoute ){
    /**
     * NOTE que los parámetros se obtienen de <<< this.router.parent.params >>>
    /**/
    this.route.parent?.params.subscribe( params => {
      console.log(`Información del usuario-nuevo: ${JSON.stringify(params)}`);
    }); 
  }
  
  ngOnInit(): void {
  }

}
