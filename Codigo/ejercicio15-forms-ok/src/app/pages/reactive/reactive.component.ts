import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidadoresService } from '../../services/validadores.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent implements OnInit {
  forma: FormGroup;

  constructor(private fb: FormBuilder, private validadores: ValidadoresService){
    this.crearFormulario();
    this.cargarDatosFormulario();
    this.crearListener();
  }

  ngOnInit(): void {
  }

  crearFormulario(){
    this.forma = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      apellido: ['', [Validators.required, Validators.minLength(5), this.validadores.noPerez]],
      correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      usuario: ['', , this.validadores.existeUsuario], //Se está manejando una validación asincrona
      password1: ['', Validators.required],
      password2: ['', Validators.required],
      direccion: this.fb.group({
        distrito: ['', [Validators.required, Validators.minLength(4)]],
        ciudad: ['', [Validators.required, Validators.minLength(5)]] 
      }),
      pasatiempos: this.fb.array([])
    },
    {
      validators: this.validadores.passwordIguales("password1", "password2")
    });
  }
 

  //['Comer', 'Dormir'].forEach(element => (this.forma.get('pasatiempos') as FormArray).push(this.fb.control(element)));

  cargarDatosFormulario(){
    /**
    //Mediante setValue debemos proporcionar los valores de todos los elemtos del formulario, de lo contrario se genera un error
    this.forma.setValue({
      nombre: 'Juan',
      apellido: 'Pérez',
      correo: 'juan.perez@gmail.com',
      direccion: {
        distrito: 'ditrito-1',
        ciudad: 'Ciudad test'
      }
    });
    /**/

    //Mediante reset solucionamos el problema anterior, por lo que únicamente setea los valores de los elemtos del formulario que se indiquen.
    this.forma.reset({
      nombre: 'Juanito',
      apellido: 'Pérez',
      correo: 'juan.perez@gmail.com',
      password1: '123',
      password2: '123',
      direccion: {
        distrito: 'ditrito-1',
        ciudad: 'Ciudad test'
      }
    });

    ['Comer', 'Dormir'].forEach(valor => (this.forma.get('pasatiempos') as FormArray).push(this.fb.control(valor)));
  }

  crearListener(){
    //Para detectar cambios en todos los elementos del formulario
    //this.forma.valueChanges.subscribe(valor => {
    //  console.log('Listener: ', valor);
    //});


    this.forma.get('nombre')?.valueChanges.subscribe(valor => {
      console.log(valor);
    });
  }

  nombreNoValido(){
    return this.forma.get('nombre')?.invalid && this.forma.get('nombre')?.touched;
  }

  apellidoNoValido(){
    return this.forma.get('apellido')?.invalid && this.forma.get('apellido')?.touched;
  }

  correoNoValido(){
    return this.forma.get('correo')?.invalid && this.forma.get('correo')?.touched;
  }

  distritoNoValido(){
    return this.forma.get('direccion.distrito')?.invalid && this.forma.get('direccion.distrito')?.touched;
  }

  ciudadNoValido(){
    return this.forma.get('direccion.ciudad')?.invalid && this.forma.get('direccion.ciudad')?.touched;
  }

  getPasatiempos(){
    return this.forma.get('pasatiempos') as FormArray;
  }

  agregarPasatiempo(){
    (this.forma.get('pasatiempos') as FormArray).push(this.fb.control('Nuevo Elemento', Validators.required));
  }

  borrarPasatiempo(index: number){
    (this.forma.get('pasatiempos') as FormArray).removeAt(index);
  }

  passwordNoValido(){
    return 
  }

  password2NoValido(){

  }

  usuarioNoValido(){
    return this.forma.get('usuario')?.invalid && this.forma.get('usuario')?.touched;
  }

  guardar() {
    console.log(this.forma);

    if( this.forma.invalid ){
      Object.values( this.forma.controls ).forEach(control => {
        if( control instanceof FormGroup ){
          Object.values( control.controls ).forEach(cntrl => {
            cntrl.markAsTouched();
          })
        }

        control.markAsTouched();
      });
    }

    //Al no indicar ni un valor, se resetean los valores de los elementos del html
    //this.forma.reset();
  }

}
