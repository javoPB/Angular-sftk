import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../modelos/pais';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent implements OnInit {
  paises: any[];

  usuario = {
    nombre: '',
    apellido: '',
    email: '',
    pais: 5,
    genero: 'Masculino'
  }

  constructor(private paisService: PaisService){}

  ngOnInit(): void {
    /**/
    this.paisService.getPaisNC().subscribe(result => {
      this.paises = result;

      //Instrucción para agregar un nuevo elemento al inicio del array
      this.paises.unshift({
        nombre: '[Seleccione un pais]',
        codigo: null
      });
      console.log(`La información de los paises es: ${JSON.stringify(this.paises)}`);
    });
    /**/
  }

  guardar(form: NgForm){
    if( form.invalid ){
      //Código para marcar los elementos del formulario como marcados.
      Object.values( form.controls ).forEach(control => {
        control.markAsTouched();
      });
    }

    console.log(form.value);
  }

}
