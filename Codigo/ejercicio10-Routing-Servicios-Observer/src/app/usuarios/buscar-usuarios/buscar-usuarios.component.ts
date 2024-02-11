import { Component, OnInit } from '@angular/core';
import { USUARIOS, Usuario } from '../../modelos/usuario';

@Component({
  selector: 'app-buscar-usuarios',
  templateUrl: './buscar-usuarios.component.html',
  styleUrl: './buscar-usuarios.component.css'
})
export class BuscarUsuariosComponent implements OnInit {
  usuarios: Usuario[] = USUARIOS;

  ngOnInit(): void {
    console.log(`Detalle de los usuarios: ${this.usuarios}`);
  }

}
